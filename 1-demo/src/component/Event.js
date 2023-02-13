import React, { Component } from 'react'
import { EventCompenentChild } from './EventChild';

export class EventComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : { contenu : "message initial"}
        }
    }
    changeInput = (e) => {
        console.log(e.target.value);
        let tempMessage = {...this.state}
        tempMessage.message.contenu = e.target.value
        this.setState ({...tempMessage})

        // test d'une autre methode
        // console.log(e.target.value);
        // let tempMessage = {...this.state.message}
        // tempMessage = {contenu : e.target.value}
        // console.log(this.state.message);
        // console.log(tempMessage);
        // this.setState ({...tempMessage.message})

    }

    clickChild = () => {
        console.log("clique btn sur le btn enfant et je suis ton parent");
    }
    clickChildParam = (message) => {
        let tempMessage = {...this.state}
        tempMessage.message.contenu = message
        this.setState ({...tempMessage})
    }
    render(){
        return (
            <>
            <input type="text" name="nameInput" placeholder='Tape ton texte ici' onChange={this.changeInput}></input>
            <h2>Composent parent : {this.state.message.contenu}</h2>
            <EventCompenentChild message={this.state.message} clickChild={this.clickChild} clickChildParam={this.clickChildParam}></EventCompenentChild>
            </>
        )
    }
}