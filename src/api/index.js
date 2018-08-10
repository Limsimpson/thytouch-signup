import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export function signup(data){
    return axios.post(`${API_URL}/accounts/signup`, data, {
        headers: {'Content-Type': 'multipart/form-data'}
    })
}