import React, {Component} from 'react';
import {Modal, Button} from  'react-bootstrap';

import bgImage from '../images/modal-add.jpg'

export default class MealPopup extends Component{

    //define the default state
    state = {
        isOpen: false,
        mealData: {}
    };
    
    open = (data) => this.setState({ isOpen: true, mealData: data });
    close = () => this.setState({ isOpen: false });

    constructor(props){
        super(props);

    }

    render(){
        const _data = this.state.mealData;

        return(
            <Modal show={this.state.isOpen} onHide={this.close}>
                <Modal.Header className={"modal-header-lg dark bg-dark"}>
                    <div className="bg-image" style={{backgroundImage: `url(${bgImage})`}}>
                        <img src={bgImage} />
                    </div>
                    <Modal.Title>{_data.name}</Modal.Title>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="ti ti-close"></i>
                    </button>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.close}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

}