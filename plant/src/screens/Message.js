import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Button,ImageBackground ,image,TouchableOpacity, Image} from "react-native";
import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
import { render } from "react-dom";
import axios from 'axios';
import { getStorage, ref, getDownloadURL, listAll, getMetadata } from 'firebase/storage'; //access the storage database
//import init from './firebase';

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});

/*export default function App() {
   useEffect(() => {
    Permission.getAsync(Permission.NOTIFICATIONS)
      .then((response) => {
        if (response.status !== "granted") {
          return Permission.askAsync(Permission.NOTIFICATIONS);
        }
        return response;
      })
      .then((response) => {
        if (response.status !== "granted") {
          return;
        }
      });
  }, []);*/
  //init();
  /*var UserVideos = {};
  var itemName
  var VideosList=[]*/
  export default class Register extends React.Component{


  handleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Violence Reminding",
        body: "Help! Help! Help!",
      },
      trigger: {
        seconds: 3,
      },
    });
  };



  createTwoButtonAlert = () =>
    Alert.alert(
    "Your parents are in danger",
    "Go save them",
    [
        {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
    );
 

 
 /* preload = () => {
    try {
      this.load
      if(VideosList != null) {
          // value previously stored
          JSON.stringify(UserVideos)
          this.props.navigation.navigate('Check',{UserVideos})
      }
      } catch(e) {
          console.log("fail")// error reading value
      }
  } */

  
  /*load = () => {
    const storage = getStorage();
    const listRef = ref(storage, '/videos/user1/2022-07-12 23:18:08');
    listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getMetadata(itemRef).then((metadata) => {
          itemName= metadata.name
          console.log(itemName)
          this.geturl(itemName)
        })
          
      });
    })
  }
  geturl = () => {
      const storage = getStorage();
      const listRef = ref(storage,'/videos/user1/2022-07-12 23:18:08/'+itemName);
      getDownloadURL(listRef).then((x) => {
        UserVideos[itemName]=x
        console.log(x)
      }).catch((error) => {
        console.log(error);
      });
    
      
    }
  
  test = () =>{
      //console.log(UserVideos)
      //var item
      Object.entries(UserVideos).forEach(([key, value]) => {
        VideosList.push({key,value});
      });
      
      console.log(VideosList[0].key)
    }*/

 /*<View style={styles.buttons}>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={this.load}
          title="loading the videos"
        />
      </View>
      <View style={styles.buttons}>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={this.test}
          title="test"
        />
      </View>*/ 
  
  render(){
   
    

  const {navigate} = this.props.navigation
   return (
    

    //<View style = {styles.container}>
    <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/logo.png')}
                    style={{width:"100%",height:"50%"}}
                    resizeMode="cover"/>
 
    <TouchableOpacity
        style={styles.button}
        onPress={this.handleNotification}
        //onPress={()=>this.preload()}
        >
        <Image source={require('../images/notification.png')} resizeMode='contain' style={{height:40,width:30 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>  通 知</Text>
      </TouchableOpacity> 
     

      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Video')} >
         <Image source={require('../images/video.png')} resizeMode='contain' style={{height:40,width:30 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>  影 片</Text>
      </TouchableOpacity>

      
    </View>
    
  ); 
}
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button:{
    backgroundColor: '#0abab5', 
    borderWidth:2, 
    borderColor:'white',
    justifyContent: 'center',
    padding:10,
    borderRadius:15,
    marginHorizontal:100,
    marginBottom:40
  },
  buttons:{
    //backgroundColor: 'white', 
    //borderWidth:2, 
    //borderColor:'black',
    justifyContent: 'center',
    padding:10,
    //marginBottom:400
   
  },
  buttonText:{
    fontSize: 25, 
    color: 'black',
    textAlign: "center"
},
image: {
  flex: 5,
  justifyContent: "center"
},
});
