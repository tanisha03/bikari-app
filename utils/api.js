import Endpoints from "./endpoint";
import axios from 'axios';

export function UserLogin (credentials){
    return axios.post(Endpoints.sendOTP(),credentials)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function VerifyOTP (credentials){
    return axios.post(Endpoints.verifyOTP(),credentials)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function setMerchantDetails (details){
    return axios.post(Endpoints.merchantUpdate(),details)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}