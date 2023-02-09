import  Adresse  from './Adresse';


export default function Contact(props) { 
    const {nom, prenom, telephone, statut , adresse } = props.contact
    
    return (
                <div className="container">
                    <div>
                    nom : {nom}, prenom : {prenom}
                    </div>
                    <div>
                    telephone : {telephone}
                    </div>
                    <div>
                    satuts :{statut ? <span style={{backgroundColor : "green"}}> Actif </span> : <span style={{backgroundColor : "red"}}> Inactif </span>} 
                    </div>
                    <Adresse adresse={adresse}></Adresse>
                  
              </div>
              )

    // {if (statut){
    //     return (
    //         <div>
    //     nom : {nom}, prenom : {prenom}, telephone : {telephone} <p style={{backgroundColor : "green"}}> satuts : Actif </p>
    //       </div>
    //     )
        
    // } else {
    //     return (
    //         <div>
    //     nom : {nom}, prenom : {prenom}, telephone : {telephone} <p style={{backgroundColor : "red"}}> satuts : Inactif </p>
     
    //       </div>
    //     )
    // } } 
}