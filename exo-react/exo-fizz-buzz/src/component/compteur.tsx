
interface Props {
    
    compteur : number;
}


export const Compteur = (props : Props) => {




    return(
    <> {props.compteur %15 ===0 && props.compteur>0 ? <><b className="fizz">Fizz</b><b className="buzz">Buzz</b></> : props.compteur %5 ===0 && props.compteur>0? <b className="buzz">Buzz</b> : props.compteur %3 ===0 && props.compteur>0? <b className="fizz">Fizz</b> : <b className="number">{props.compteur}</b> }
    
    </>
    )
}