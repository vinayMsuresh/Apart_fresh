import { URL } from "./url";
import axios from 'axios';

export function registerUser(body){
    return axios.post(`${URL}user/register`,body);
}

export function loginUser(body){
    return axios.post(`${URL}user/login`, body);
}