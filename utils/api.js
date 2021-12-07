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

export function getMerchantDetails (id){
    return axios.get(Endpoints.getMerchant(id))
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function setMerchantDetails (details){
    return axios.post(Endpoints.merchantUpdate(),details)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function getOffers (id){
    return axios.get(Endpoints.getOffer(id))
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function setOffer (id, details){
    return axios.post(Endpoints.createOffer(id),details)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}