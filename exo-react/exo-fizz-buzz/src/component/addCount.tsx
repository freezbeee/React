
interface Props {
    addcount : () => void
}


export const AddCount = (Props : Props) => {




    return(
    <button onClick={Props.addcount}>+</button>
    )
}