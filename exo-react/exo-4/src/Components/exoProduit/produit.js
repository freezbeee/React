import React, { Component } from 'react' // necessaire pour mon composant dans une classe
// import { Adresse } from '../FirstExercice/Adresse'
import './thirdclient.css';
export class Produit extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {}
    }

    clickProduit = (e) => {
        e.preventDefault()
      //  console.log(e)
       // console.log(this.props.client.nom)
       // console.log("changer le statut de ce client")
      //  console.log("tu as clique sur le client : ",this.props.client.nom)
       console.log("tu as clique sur le produit : ",e.target.dataset.name)
       
       this.props.addProduit(e.target.dataset.name);
    }

    render() {
        const {id,titre,prix,description} = this.props.produit
        //return dans un React Fragment
        return (
            <>
            <tr>
                            <td className='td-produit'>{id}</td>
                            <td className='td-produit'>{titre}</td>
                            <td className='td-produit'>{prix} euros</td>
                            <td className='td-produit' >{description}</td>
                            <td className='td-produit'><a href="#" onClick={this.clickProduit} data-name={id}>ajouter aux panier</a></td>
                            {/* <Adresse adresse={adresse}></Adresse> */}
                        </tr>
            </>
        )
    }
}