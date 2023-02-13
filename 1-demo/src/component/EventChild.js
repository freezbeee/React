import React, { Component } from 'react'

export class EventCompenentChild extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
  
    clickLink = (e) => {
        e.preventDefault()
        // console.log('click');
        this.props.clickChild()
        this.props.clickChildParam('wouuhhhh')
    }

    render(){
        const {contenu} = this.props.message
        return (
            <>
             <div>
                <h2>Composant Enfant : {contenu} </h2>
                <a href='https://www.google.fr' onClick={this.clickLink}>Lien enfant</a>
             </div>
            </>
        )
    }

}