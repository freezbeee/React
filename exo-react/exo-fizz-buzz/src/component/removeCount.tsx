
interface Props {
    removeCount : () => void;
    compteur : number;
}


export const RemoveCount = (props : Props) => {




    return(
    <>{props.compteur ===0 ? <button>-</button> : <button onClick={props.removeCount}>-</button>}
    </>
    )
}