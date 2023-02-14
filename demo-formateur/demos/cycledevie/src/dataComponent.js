import { Component } from "react"
import { getData, getPokeApi, clientApi } from "./services/data.service"
import { Client } from "./services/client"


export class DataComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        // getData().then(data => {
        //     this.setState({ data : data})
        // })

        
        clientApi().then(res => {
            console.log(res.data);
            const stockDataApi = res.data
            console.log(stockDataApi);
            this.setState({data : [...stockDataApi]})
            
           
        })

    }
    changeStatutClientByid = (id) => {
        // console.log("ici je dois modifier le statut d'un client par rapport a son id")
        // console.log("j'ai recu en parametre :"+id)
         const tmpClients = [...this.state.data]
         tmpClients.forEach(c => {
             if(c.id == id){
                 c.status = !c.status
             }
         })
        // console.log(tmpClients)
         this.setState({ data : [...tmpClients]})
 
     }


    render(){
        return(
            <div>
                {
                    // this.state.data.length == 0 ? <div>En cours de chargement ....</div>
                    // :
                    <div>
                        {/* {this.state.data.map((e,i) => (<div key={i}>{e}</div>))} */}
                        {this.state.data.map((data,i) => (<Client data={data} key={i} changeStatutClientByid={this.changeStatutClientByid} ></Client>))}   
                        
                     
                    </div>
                }
            </div>
        )
    }
}

