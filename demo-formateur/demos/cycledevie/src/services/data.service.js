import axios from "axios";
// const data = ["toto","titi","tata"]


// export const getData = () => new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(data)
//     },5000)
// })



// const urlapi = "https://pokeapi.co/api/v2/pokemon/ditto"
const urlapi = "http://localhost:8080/clients"


// export const getPokeApi = () => {
//     return axios.get(urlapi)
// }
export const clientApi = () => {
    return axios.get(urlapi)
}