import Endpoints from "./endpoint";
import axios from 'axios';

const Headers = {
    headers: {
        'X-API-KEY': 'BIKARI_TO_THE_MOON'
    }
};

export function UserLogin (credentials){
    return axios.post(Endpoints.sendOTP(),credentials, Headers)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function VerifyOTP (credentials){
    return axios.post(Endpoints.verifyOTP(),credentials, Headers)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function getMerchantDetails (id){
    return axios.get(Endpoints.getMerchant(id))
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function setMerchantDetails (details){
    return axios.post(Endpoints.merchantUpdate(),details, Headers)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function getOffers (id){
    return axios.get(Endpoints.getOffer(id), Headers)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function setOffer (id, details){
    return axios.post(Endpoints.createOffer(id),details, Headers)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function getAnalytics (id){
    return axios.get(Endpoints.getAnalytics(id), Headers)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function broadcastOffer (id, offer){
    return axios.post(Endpoints.broadcastOffer(id, offer), {}, Headers)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}