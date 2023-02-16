import { useState } from "react"
import { AddCount } from "./addCount"
import { Compteur } from "./compteur"
import { RemoveCount } from "./removeCount"





export const FizzBuzz = () => {

    const [compteur, setCompteur] = useState<number>(0)


    const addCount = () => {
        setCompteur(compteur+1)
        }
    const removeCount = () => {
        setCompteur(compteur-1)
        }
      

    return (
        <div className="container">
        <h1 className="title">FizzBuzz</h1>
        <hr />
        <div className="cicle-count">
           <Compteur compteur={compteur}/>
           </div>
        <div className="container-btn">
            <div>
               <AddCount addcount={addCount}/>
              
                
            </div>
            <div>
            <RemoveCount removeCount={removeCount} compteur={compteur}/>
            </div>
        </div>
        </div>
    )
}