import {url} from "../config/Connection";
import {storeObj} from "../store/setup" 
// import NetInfo from "@react-native-community/netinfo";


// const connection = NetInfo.isConnected.fetch().then(connected => connected).catch(err => false);

export const Request = async ({ path, body = {}, method = "GET", header={} }) => {
  try {
    const {getState} = storeObj.store;
    const {user={}} = getState().user;
    const {Token=""} = user;
    let headers = { "content-type": "application/json", ...header , 'Authorization':`Bearer ${Token}` };
    const obj = method === "POST" ? { body: JSON.stringify(body) } : {} ;
    console.log("request ",`${url}${path}`,body,headers)
     const response = await fetch(`${url}${path}`, { method, headers, ...obj });
     console.log("response pre response ", response)
     return await response.json();
  } catch (error) {
    console.log(error, "errorerrorerror");
    return new Promise((res, rej) => {
      rej(error);
    });
  }
};
