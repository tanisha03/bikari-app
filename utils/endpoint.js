const ENDPOINT = 'http://biker.us-east-1.elasticbeanstalk.com'

export default {
    sendOTP: () => `${ENDPOINT}/auth/sendOtp`,
    verifyOTP: () => `${ENDPOINT}/auth/verifyOtp`,
    merchantUpdate: () => `${ENDPOINT}/merchant/update`,
    reviews:(bank,touchpoint) => `${ENDPOINT}/feedback/bank/${bank}/touchPoint/${touchpoint}/reviews`,
};