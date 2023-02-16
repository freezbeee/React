import { useState } from "react"



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
            {compteur %15 ===0 && compteur>0 ? <><b className="fizz">Fizz</b><b className="buzz">Buzz</b></> : compteur %5 ===0 && compteur>0? <b className="buzz">Buzz</b> : compteur %3 ===0 && compteur>0? <b className="fizz">Fizz</b> : <b className="number">{compteur}</b> }
        </div>
        <div className="container-btn">
            <div>
                <button onClick={addCount}>+</button>
                
            </div>
            <div>
            {compteur===0 ? <button>-</button> : <button onClick={removeCount}>-</button>}
            </div>
        </div>
        </div>
    )
}