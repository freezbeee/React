import React, { Component } from 'react' // necessaire pour mon composant dans une classe
import { Panier } from './panier'
import { Produit } from './produit'

export class ListPoduit extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.price = 0
        this.state = {
            produit : [
                {
                    id: 1,
                    titre: "la tour de pi",
                    prix: 3.14,
                    description : "elle est penchée a 3.14 degres",
                    
                },{
                    id: 2,
                    titre: "la tour aisselle",
                    prix: 556,
                    description : "Tour qui degage une forte odeur",
                    
                },{
                    id: 3,
                    titre: "Statue de la dictature",
                    prix: 200,
                    description : "statue a l'effigie de notre chef supreme",
                    
                }
            ],
            monPanier : [{

                   
                    
                }]
            
        }
    }
    
    addProduit = (id) => {
        let stockId = {}
        
       // console.log("ici je dois modifier le statut d'un client par rapport a son name")
       // console.log("j'ai recu en parametre :"+name)
        const tmppanier = [...this.state.produit]
        
        tmppanier.forEach(c => {
            if(c.id == id){
                 stockId = {id: c.id,
                    titre: c.titre,
                    prix: c.prix,
                    description : c.description,}

                    this.price += c.prix
                    this.state.monPanier.push(stockId)
               
               
            }
        })
        const tmpStockPanier = [...this.state.monPanier]
        console.log(this.state.monPanier)
       this.setState({monPanier : [...tmpStockPanier]})
       

    }

    render() {

        return (
            <>
             <table>
                    <thead>
                        <tr>
                           <th>id</th>
                           <th>titre</th>
                           <th>prix</th>
                           <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.produit.map((produit,i) => (<Produit produit={produit} key={i} addProduit={this.addProduit}></Produit>))}         
                    </tbody>
                    </table>
             
                    <h1>Votre panier</h1>

                    {this.state.monPanier.map((monPanier,i) => (<Panier monPanier={monPanier} key={i} ></Panier>))}   

                    <p>vous aller payer {this.price} euros </p>  
            
            </>
        )
    }
}