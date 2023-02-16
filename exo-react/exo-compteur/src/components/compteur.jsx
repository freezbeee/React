import { useEffect, useState } from "react"


const Compteur = (props) => {

  
  const [compteur, setcompteur] = useState(props.compteur)


  useEffect(() => {
    let interval = setInterval ( () =>{ 
      setcompteur(compteur+1)
    }, 1000)
    // console.log(props.compteur)
    return () => {
      if(interval){
        clearInterval(interval)
        interval = undefined
      }
    }
   
 
   
 }, [compteur, props.compteur])





//  console.log(+props.compteur.value)

  return (
  <>
   
    
    <div>
    
      <div> {compteur}
      <button onClick={props.deleteCount} className='btn2'>Delete</button></div> 
     
    
    </div>
  </>
  )
}

export default Compteur