import React, {useContext, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import {Transition} from 'react-spring/renderprops';

import FFMenuContext, {FFMenuContextProvider} from './tools/ffmenucontext';
import {CartProvider} from './tools/cartcontext';

import Header from './pages/header';
import Footer from './pages/footer'
import HomePage  from './pages/homepage';
import AboutUsPage from './pages/aboutuspage';
import ContactPage from './pages/contactpage';
import CheckoutPage from './pages/checkoutpage';
import NotFoundPage from './pages/notfoundpage';

import CartPanel from './components/cartpanel';
import BodyOverlay from './components/bodyoverlay';
import MealPopup from './components/mealpopup';
import PageLoader from './components/pageloader';


const data = [
    {
        id: 1,
        name : "Chicken",
        banner_img: "http://themes.suelo.pl/soup/assets/img/photos/menu-title-burgers.jpg",
        meals : [
            {
                id: 1,
                name: 'Teriyaki Chicken & Avocado Row',
                description: "avocado, cucumber, capsicum",
                prices: [
                    {
                        id: 1,
                        unit: "5/pc(s)",
                        price: 8.50
                    },
                    {
                        id: 2,
                        unit: "10/pc(s)",
                        price: 17.00
                    }
                ]
            },
            {
                id: 2,
                name: 'Teriyaki Chicken & Cream Row',
                description: "avocado, cucumber, capsicum",
                prices: [
                    {
                        id: 3,
                        unit: "5/pc(s)",
                        price: 8.50
                    },
                    {
                        id: 4,
                        unit: "10/pc(s)",
                        price: 17.00
                    }
                ]
            }
        ]
    },

    {
        id: 2,
        name : "Salmon",
        banner_img: "http://themes.suelo.pl/soup/assets/img/photos/menu-title-sushi.jpg",
        meals : [
            {
                id: 3,
                name: 'Fresh Salmon & Avocado Row',
                description: "avocado",
                prices: [
                    {
                        id: 5,
                        unit: "5/pc(s)",
                        price: 9.00
                    },
                    {
                        id: 6,
                        unit: "10/pc(s)",
                        price: 18.00
                    }
                ]
            }
        ]
    },

    {
        id: 3,
        name : "Donburi",
        banner_img: "http://themes.suelo.pl/soup/assets/img/photos/menu-title-drinks.jpg",
        meals : [
            {
                id: 4,
                name: 'Teriyaki Chicken Donburi',
                description: "vegetable salad, mustard sauce",
                prices: [
                    {
                        id: 7,
                        unit: "pack",
                        price: 13.90
                    }
                ]
            }
        ]
    }
];

/**
 * Create switch routes block
 */
const SwitchRouteBlock = () => {
    const _location = useLocation();
    const _ffcontext = useContext(FFMenuContext);
    let _classNameRef = useRef();

    
    useEffect(()=>{

        /**
         * We just add page class name, according to url location
         */
        //First we need to remove prev class name from BODY
        if(_classNameRef.current)
            document.body.classList.remove(_classNameRef.current);
            
        switch (_location.pathname) {
            case "/":
                _classNameRef.current = "home-page";
                break;

            case "/checkout":
                _classNameRef.current = "checkout-page";
                break;
        
            default:
                _classNameRef.current = null;
                break;
        }

        //To add new class name
        if(_classNameRef.current)
            document.body.classList.add(_classNameRef.current);

    })

    return(
        <Route 
            render={({ location, ...rest }) => (
                <Transition
                    native
                    items={location}
                    //keys= {location.pathname.split('/')[1]}
                    //We use pathname as key here to fix
                    //sub nav issue
                    keys= {location.pathname}

                    // from= {{ opacity: 0 }}
                    // enter={{ opacity: 1 }}
                    // leave={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: "100%" }}
                    from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
                    enter={[
                        { opacity: 1, transform: 'translate3d(0%,0,0)' },
                        // { transform: 'none', immediate: true}
                    ]}
                    leave={{ 
                        opacity: 0, 
                        transform: 'translate3d(-50%,0,0)', 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: "100%" 
                    }}
                >
                    {(loc, state) => ({transform, ...style}) => {   

                        let _transform = transform.interpolate( ( t ) => { 
                            return( t === 'translate3d(0%,0,0)' ? 'none' : t ) 
                        })
                        
                        return(
                            <Switch location={state === 'update' ? location : loc}>
                                <Route exact path="/" 
                                    render={(props) => <HomePage style={{...style, transform : _transform}} />} />
                                
                                <Route path="/about-us"
                                    render={(props) => <AboutUsPage style={{...style, transform : _transform}} />} 
                                />
                                <Route path="/contact" 
                                    render={(props) => <ContactPage style={{transform : _transform, ...style}} />} 
                                />             
                                <Route path="/checkout" 
                                    render={(props) => <CheckoutPage style={{transform : _transform, ...style}} />} 
                                />    
                                    
                                <Route
                                    render={(props) => <NotFoundPage style={{transform : _transform, ...style}} />} 
                                />                            
                            </Switch>
                        )
                    }}
                </Transition>
            )} 
        />
    )
}


/**
 * defien the main component 
 */
const Main = () => {
    //define the meal popup ref
    const _ffcontext = useContext(FFMenuContext);

    //_ffcontext.hidePageLoader();
    useEffect(()=>{
        
        //_ffcontext.setMenuData(data);
        //_ffcontext.hidePageLoader();

        fetch(process.env.REACT_APP_BASE_URL + "api/get-menu")
            .then(res => res.json())
            .then(
                //For success
                (result)=>{
                    
                    _ffcontext.setMenuData(result);
                    _ffcontext.hidePageLoader();
                    
                },
                //For error
                (error)=>{
                    console.error(error);
                }
            )
    }, [])

    return (
        <Router>

            <Header />
            
            <div id="content">
                
                <SwitchRouteBlock />
                
                <Footer />
            </div>
            
            {/** Add Cart Panel */}
            <CartPanel />

            {/** Add Meal Popup */}
            <MealPopup ref={_ffcontext.setMealpopupRef} />
            
            {/** Add body overlay here */}
            <BodyOverlay />

            {/** Check loading screen */}
            <PageLoader isShown={_ffcontext.isPageLoading()} />
            
        </Router>
    );
}

export default Main;