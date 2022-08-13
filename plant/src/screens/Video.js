import * as React from 'react';
import { useState,useEffect } from "react";
import { View, StyleSheet, Button,TouchableOpacity, Image, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Video, AVPlaybackStatus } from 'expo-av';
import { initializeApp } from 'firebase/app'; //validate yourself
import { getStorage, ref, getDownloadURL, listAll, getMetadata } from 'firebase/storage'; //access the storage database

export default function App() { //export default class Video extends React.Component {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
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
  initializeApp(config);

  const [url, setUrl] = useState();
  
  /*useEffect(() => {
    const func = async() => {
      const storage = getStorage();
      const files = ref(storage,"/videos/user1/2022-07-12 23:18:08/tw_streetfight.mp4")
      await getDownloadURL(files).then((x) => {
        setUrl(x);
      })
      .catch((error) => {
        console.error(error)
    });

    }

    if (url == undefined) {func()};
  },[]);*/

  
const UserVideos = {};
var itemName
  
function load() {
  const storage = getStorage();
  const listRef = ref(storage, '/videos/user1/2022-07-12 23:18:08');
  listAll(listRef)
  .then((res) => {
    res.items.forEach((itemRef) => {
      getMetadata(itemRef).then((metadata) => {
        itemName= metadata.name
        console.log(itemName)
        geturl(itemName)
      })
        
    });
  })
}
  function geturl(itemName){
    const storage = getStorage();
    const listRef = ref(storage,'/videos/user1/2022-07-12 23:18:08/'+itemName);
    getDownloadURL(listRef).then((x) => {
      UserVideos[itemName]=x
      console.log(x)
    }).catch((error) => {
      console.log(error);
    });
  
    
  }

/*const storage = getStorage();
const listRef = ref(storage, '/videos/user1/2022-07-12 23:18:08');
const lists = [];
const listAllFiles = () =>{
  listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((y) =>{
            lists.push(y)
            console.log("listall: "+lists[0])
        })
      });
    }).catch((error) => {
      console.error(error)
    });
}*/
const VideosList=[]
const test = () =>{
  //console.log(UserVideos)
  var item
  Object.entries(UserVideos).forEach(([key, value]) => {
    VideosList.push({key,value});
  });
  //console.log(VideosList)
}

const state = {video:""}
const Update =(video) =>{
  this.setState({video:video})
}

  return (
    <View style={styles.container}>
      <Text style = {styles.label}>Pick a viedo</Text>
            <Picker 
               selectedValue = {state.video} 
               onValueChange = {Update}>
            {  
               VideosList.map((o,index) =>
                  <Picker.Item key={o.key} value = {o.value}/>
               )
            }
            </Picker>
            <Text style = {styles.label}>Your video</Text>
            <Text style = {styles.text}>{state.video}</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri:url//'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={load}
          title="loading the videos"
        />
      </View>
      <View style={styles.buttons}>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={test}
          title="test"
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color:'#333333'
 },
 text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
 }
});
