
import { Component } from 'react';

import  Contact  from './Contact';
import './liste.css'

export class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            contact : [{ 
                
                nom: "le chti", 
                prenom: "beber",
                telephone: "06254826",
                statut : true  ,
                adresse: { rue: "4 avenue maroille", ville: "frometon", cp: "59200" }
            },
            { 
                
                nom: "jul", 
                prenom: "julien",
                telephone: "06757545",
                statut : false  ,
                adresse: { rue: "5 avenue mistral", ville: "Marseille", cp: "48200" }
            },
            { 
               
                nom: " contact", 
                prenom: " contact",
                telephone: "0123456789",
                statut : true  ,
                adresse: { rue: "ma rue", ville: "ma ville", cp: "59200" }
            }] 
        }
    }
    changeStatus = (name) => {
        console.log('ici je dois modifier le status');
        console.log(name);
    }
  

    render() {
        
        return(
            <div>
                {
                    this.state.contact.map((c,i) => (<Affichage key={i} contact={c} changeStatus={this.changeStatus}></Affichage>))
                }
            </div>
        )
    }
       
   


}


export function Affichage(props){
    return (
       <h2 className='container-liste'>
                <Contact contact ={props.contact}></Contact>
                
              
       </h2>
       

    )
}