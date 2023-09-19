import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL;
console.log(baseURL);

const Axios = axios.create({
    baseURL
});
/*

   ToDO:
    In such case that useless part :) , but Here we can write some auth logic for example refresh JWT or something like that:
*/

export default Axios;