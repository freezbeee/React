import React, { Component } from 'react' // necessaire pour mon composant dans une classe
// import { Adresse } from '../FirstExercice/Adresse'
import { Produit } from './produit';
export class Panier extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {}
    }

    // clickProduit = (e) => {
    //     e.preventDefault()
    //   //  console.log(e)
    //    // console.log(this.props.client.nom)
    //    // console.log("changer le statut de ce client")
    //   //  console.log("tu as clique sur le client : ",this.props.client.nom)
    //    console.log("tu as clique sur le client : ",e.target.dataset.name)
    //     this.props.addProduit(e.target.dataset.id)
    // }

    render() {
        const {id, titre, prix, description} = this.props.monPanier
        // const {id,titre,prix,description} = this.props.produit
        //return dans un React Fragment
    
        return (
            <>

            <div className='panier-container'>
                            <p className='panier'>{id}</p>
                            <p className='panier'>{titre}</p>
                            <p className='panier'>{prix} </p>
                            <p className='panier' >{description}</p>
                            {/* <td className='td-produit'><a href="#" onClick={this.clickProduit} data-name={id}>ajouter aux panier</a></td> */}
                            {/* <Adresse adresse={adresse}></Adresse> */}
                        </div>
          
            </>
        )
    
    }
}