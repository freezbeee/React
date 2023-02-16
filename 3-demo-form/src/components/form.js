import {Component} from "react"



export class Formulaire extends Component{
    constructor(props){
        super(props)
        this.state = {
            client : {
            nom : "",
            prenom : ""
            }
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        // envoyer un objet qui a un prenom ety un, nom
        console.log(this.state.client);
        const valueClient = {...this.state.client}
        this.setState({client : {nom : "", prenom:""}})
        e.target.reset()
    }

    fieldsOnChangeClient = (e) => {
        console.log(e.target.name);
        // console.log(e.target.getAttribute('name'));
        const tmpClient = {...this.state.client}
        tmpClient [e.target.name] = e.target.value
        this.setState({client : {...tmpClient}})
    }

    render(){
        return(
            <>
            <h1>Mon form client</h1>
            <form onSubmit={this.submitForm}>
                <p>Votre nom</p>
                <input type="text" onChange={this.fieldsOnChangeClient} name="nom"></input>
                <p>Votre prenom</p>
                <input  type="text" onChange={this.fieldsOnChangeClient} name="prenom"></input>
                <button>envoyer</button>
            </form>
            </>
        )
    }
} 