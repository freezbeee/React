

export default function Adresse(props) { 
    const {rue, ville, cp} = props.adresse
    // console.log(props);
    return (
        <div className="container">
        <div>
        rue : {rue}
        </div>
        <div>
        ville : {ville}
        </div>
        <div>
       Code Postale : {cp}
        </div>
       </div>
    )
    }