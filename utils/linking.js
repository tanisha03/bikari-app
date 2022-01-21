import { Linking } from 'react-native';
import RNFetchBlob from "rn-fetch-blob";

export const ImageUrlToBase64 = (url) => {
    const fs = RNFetchBlob.fs;
    let imagePath = null;
    return RNFetchBlob.config({
      fileCache: true
    })
    .fetch("GET", url)
    .then(resp => {
      imagePath = resp.path();
      return resp.readFile("base64");
    })
    .then(base64Data => base64Data);
};


export const sendWhatsAppMessage = url => {
    let link = url.replace('% ','');
    console.log(link);
    if (!(link===undefined)) {
     Linking.canOpenURL(link)
      .then(supported => {
        if (!supported) {
         alert(
           'Please install whats app to send direct message via whatsapp'
         );
       } else {
         return Linking.openURL(link);
       }
     })
     .catch(err => console.error('An error occurred', err));
   } else {
     console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
    }
   };