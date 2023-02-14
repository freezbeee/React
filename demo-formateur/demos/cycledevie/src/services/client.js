import React, { Component } from 'react' // necessaire pour mon composant dans une classe
import {Address} from "./adresse"
import './client.css';
export class Client extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {}
    }
    clickStatut = (e) => {
        e.preventDefault()
    
        this.props.changeStatutClientByid(e.target.dataset.name)
    }

   

    render() {
        const { id, firstName, lastName, phone, status, address} = this.props.data
        // const {id,titre,prix,description} = this.props.produit
        //return dans un React Fragment
    
        return (
            <>

            <div className='container-client'>
                          <p> id : {id} </p>
                          <p> prenom : {firstName} </p>
                         <p>  nom : {lastName} </p>
                         <p>   phone : {phone} </p>
                          <div className={status? "green": "red"}>{status? "actif": "non actif"}</div>
                          <a href="#" onClick={this.clickStatut} data-name={id}>Changer Statut</a>
                           
            </div>
                        <Address address={address}></Address>
          
            </>
        )
    
    }
}