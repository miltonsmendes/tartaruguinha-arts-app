import axios from 'axios';


const apiStore = axios.create({
    baseURL: 'https://tartaruguinha-arts-api.herokuapp.com',
    method: 'GET'
})

export default apiStore;