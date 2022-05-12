import { URL } from "./url";
import axios from 'axios';

export function registerUser(body){
    return axios.post(`${URL}user/register`,body);
}

export function loginUser(body){
    return axios.post(`${URL}user/login`, body);
}

export function requestOtp(number){
    return axios.get(`${URL}user/forgot/${number}`);
}

export function forgotChange(body){
    return axios.post(`${URL}user/forgot/change`,body);
}