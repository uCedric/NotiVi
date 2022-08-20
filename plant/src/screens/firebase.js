import { initializeApp } from 'firebase/app'; //validate yourself
import { getStorage, ref, getDownloadURL, listAll, getMetadata } from 'firebase/storage'; //access the storage database
import  AsyncStorage  from '@react-native-async-storage/async-storage';


const config={
    "apiKey": "AIzaSyBxID4_kAxePegIf4hav5XU2J6dY2wtsr0",
    "authDomain": "fightiden.firebaseapp.com",
    "databaseURL":"https://fightiden.firebaseapp.com",
    "projectId" : "fightiden",
    "storageBucket": "fightiden.appspot.com",
    "messagingSenderId": "611248274498",
    "appId": "1:611248274498:web:12736121d136ec61cb81db",
    "measurementId": "G-BE77YGKJCV",
    "serviceAccount":"../firebase/privatekey.json"
    }
const init =() =>{
    initializeApp(config)
    load();
    test();
}
const UserVideos = {};
var itemName
const VideosList =[]
const load = () => {
    const storage = getStorage();
    const listRef = ref(storage, '/videos/user1/2022-07-12 23:18:08');
    listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getMetadata(itemRef).then((metadata) => {
          itemName= metadata.name
          //console.log(itemName)
          geturl(itemName)
        })
          
      });
    })
  }
const geturl = () => {
    const storage = getStorage();
    const listRef = ref(storage,'/videos/user1/2022-07-12 23:18:08/'+itemName);
    getDownloadURL(listRef).then((x) => {
    //AsyncStorage.setItem(itemName,x)
    UserVideos[itemName]=x
    //console.log(x)
    }).catch((error) => {
    //console.log(error);
    });

    
}
const test = () =>{
    var count = 0
    Object.entries(UserVideos).forEach(([key, value]) => {
      VideosList[count]={key,value};
      count=count+1;
      //VideosList.push({key,value});
    });
}
  
export default init;
export {VideosList}
//export default init;