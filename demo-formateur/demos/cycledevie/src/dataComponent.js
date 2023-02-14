import { Component } from "react"
import { getData, getPokeApi, clientApi } from "./services/data.service"

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
            console.log(this.state.data);
        })
    }


    render(){
        return(
            <div>
                {
                    this.state.data.length == 0 ? <div>En cours de chargement ....</div>
                    :
                    (<div>
                        {/* {this.state.data.map((e,i) => (<div key={i}>{e}</div>))} */}
                        {this.state.data.map((client,i) => (<cl monPanier={monPanier} key={i} ></cl>))}   
                     <div></div>
                    </div>)
                }
            </div>
        )
    }
}

