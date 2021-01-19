import React, {Component} from 'react';
import {Modal, Button} from  'react-bootstrap';

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

        return(
            <Modal show={this.state.isOpen} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
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