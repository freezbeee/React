import {Component} from "react"



export class Formulaire extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            client : {
            id : 4,
            firstName : "",
            lastName : "",
            phone : "",
            status : true,
            
                    street : "",
                    postCode : "",
                    city : "",

            
            },valueClient : []
        }
    }
    
    submitForm = (e) => {
        e.preventDefault()
        // envoyer un objet qui a un prenom ety un, nom
        
        console.log(this.state.client);
        const tmpAdd = {...this.state.client}
        this.setState({client : {id : 4 , firstName : "", lastName:"", phone : "", street : "", postCode : "", city : ""}})
        this.setState({ valueClient : {...tmpAdd}})
        console.log(this.state.valueClient);
        e.target.reset()

        
        
    }

    fieldsOnChangeClient = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.getAttribute('name'));
        const tmpClient = {...this.state.client}
        tmpClient [e.target.name] = e.target.value
        this.setState({client : {...tmpClient}})
    }

    render(){
        return(
            <>
            <h1>ajout  client</h1>
            <form onSubmit={this.submitForm}>
                
                <p>Votre prenom</p>
                <input  type="text" onChange={this.fieldsOnChangeClient} name="firstName"></input>
                <p>Votre nom</p>
                <input type="text" onChange={this.fieldsOnChangeClient} name="lastName"></input>
                <p>Votre telephone</p>
                <input  type="text" onChange={this.fieldsOnChangeClient} name="phone"></input>
                <p>Votre rue</p>
                <input type="text" onChange={this.fieldsOnChangeClient} name="street"></input>
                <p>Votre code postale</p>
                <input  type="text" onChange={this.fieldsOnChangeClient} name="postCode"></input>
                <p>Votre ville</p>
                <input  type="text" onChange={this.fieldsOnChangeClient} name="city"></input>
                <button>envoyer</button>



                <div>
                    <p>{this.state.valueClient.id}</p>
                    <p>{this.state.valueClient.firstName}</p>
                    <p>{this.state.valueClient.lastName}</p>
                    <p>{this.state.valueClient.phone}</p>
                    <p>{this.state.valueClient.status}</p>
                    <p>{this.state.valueClient.street}</p>
                    <p>{this.state.valueClient.postalCode}</p>
                    <p>{this.state.valueClient.city}</p>
                   
                </div>
            </form>
            </>
        )
    }
} 