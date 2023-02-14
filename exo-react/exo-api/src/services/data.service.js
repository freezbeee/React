import axios from "axios";





const urlapi = "http://localhost:8080/clients"



export const clientApi = () => {
    return axios.get(urlapi)
}