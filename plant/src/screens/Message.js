import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Button,ImageBackground ,image,TouchableOpacity, Image} from "react-native";
import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
import { render } from "react-dom";
import axios from 'axios';
import { getStorage, ref, getDownloadURL, listAll, getMetadata } from 'firebase/storage'; //access the storage database
//import init from './firebase'
//import {VideosList} from './firebase'

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});
   
  //init();
  export default class Register extends React.Component{
    /*test = () =>{
      console.log(VideosList) 
    }*/
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
        onPress={()=>{navigate('Video')
                      }} >
         <Image source={require('../images/video.png')} resizeMode='contain' style={{height:40,width:30 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>  影 片</Text>
      </TouchableOpacity>

      {/*<View style={styles.buttons}>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={this.test}
          title="test"
        />
                    </View> */}
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
