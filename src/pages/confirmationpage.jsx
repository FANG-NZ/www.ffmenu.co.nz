import {NavLink} from 'react-router-dom';

const ConfirmationPage = () => {

    return(
        <section className="section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-4">
                        <span className="icon icon-xl icon-success">
                            <i className="ti ti-check-box"></i>
                        </span>
                        <h1 className="mb-2">Thank you for your order!</h1>
                        <h4 className="text-muted mb-5">
                            You will recieve it as soon as possible.
                        </h4>

                        <NavLink to="/" className="btn btn-outline-secondary">
                            <span>Go back to menu</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConfirmationPage;