const ENDPOINT = 'http://biker.us-east-1.elasticbeanstalk.com'

export default {
    sendOTP: () => `${ENDPOINT}/auth/sendOtp`,
    verifyOTP: () => `${ENDPOINT}/auth/verifyOtp`,
    merchantUpdate: () => `${ENDPOINT}/merchant/update`,
    getMerchant:(id) => `${ENDPOINT}/merchant/${id}`,
    getOffer:(id) => `${ENDPOINT}/offers/${id}`,
    createOffer:(id) => `${ENDPOINT}/offers/create/${id}`,
    getAnalytics:(id) => `${ENDPOINT}/analytics/${id}`,
    broadcastOffer:(id, offer) => `${ENDPOINT}/merchant/${id}/${offer}`,
};