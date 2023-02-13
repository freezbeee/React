import  Adresse  from './Adresse';


export default function Contact(props) { 
    const {nom, prenom, telephone, statut , adresse } = props.contact
    
// regarder cours car pas reussi en

    // const clickLink = (e) => {
    //     e.preventDefault()
    //     console.log({nom});
    //     console.log({e});
    //     console.log(e.target.dataset.nom);
        
    // }
    

    return (
                <div className="container">
                    <div>
                    nom : {nom}, prenom : {prenom}
                    </div>
                    <div>
                    telephone : {telephone}
                    </div>
                    <div>
                    statuts :{statut ? <span style={{backgroundColor : "green"}}> Actif </span> : <span style={{backgroundColor : "red"}}> Inactif </span>} 
                    </div>
                    <a href='#' onClick={clickLink} data-name={nom}>Lien enfant</a>
                    
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