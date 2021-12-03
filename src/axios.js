import axios from 'axios';

// make a request
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;