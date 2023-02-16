import { useState, useRef } from "react";
import Compteur from "./compteur";


const MainComponent = () => {
  const compteurRef = useRef()
  // const table = []
 
  
  const [compteur, setCompteur] = useState([])

  
  



 const onCompteurFormHandler = (event) => {
 
  event.preventDefault()
  setCompteur(
    [
      ...compteur,+compteurRef.current.value
    ]
  )
 
 }

 const deleteCount = (counterid) =>{
  setCompteur([...compteur.slice(0, counterid), ...compteur.slice(counterid + 1) ])
 }
 
//  console.log(compteur.length)
  return (
    <div className="card-container">
    <div>
      <h1>Mon compteur</h1> 
    </div>
    <hr></hr>
    <div>
      <form action="" onSubmit={onCompteurFormHandler} > 
      {/* <span>Start Value : <b>{compteur}</b></span> */}
      <input type="Number" ref={compteurRef} required />
      <button className="btn" >Ajouter un compteur</button>
      </form>
    </div>
    <hr />
     <h1>Compteur</h1>
      <hr />
      {compteur.length === 0 ? <div>Entrer un numéro</div> 
      :<div>  {compteur.map((value,i) => <Compteur  compteur={value} key={i} deleteCount={()=>deleteCount(i)} />)}</div> }
   
      <hr />
      
    </div>
  )
}

export default MainComponent