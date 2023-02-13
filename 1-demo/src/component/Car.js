import React, { Component } from 'react'

export class Car extends Component {
    constructor(props){
        super(props)
        this.state = {
                brand : 'ford',
                model : 'Mustang',
                year : 1964,
                color : 'red'
        }
    }

    changeColor = () => {
        console.log("je veux changer de couleur");
        // faire une copie de mon state 
        const tempState = {...this.state}
        console.log(tempState);
        tempState.color = "vert"
        console.log( tempState);
        // this.setState ({
        //     brand : 'ford',
        //         model : 'Mustang',
        //         year : 1964,
        //         color : 'bleu'
        // })
        this.setState ({...tempState})

    }

    render() {
        return (
        <div>
            <h1>My {this.state.brand}</h1>
            <p>It is a</p>
            <p>{this.state.model}</p>
            <p>It is a</p>
            <p>from</p>
            <p>{this.state.year}</p>
            <p>{this.state.color}</p>

            <button type='button' onClick={this.changeColor}>Change Color</button>
        </div>

        )
    }
}