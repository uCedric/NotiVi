/* import React from 'react'
import {View, Text} from 'react-native'
//import LoginScreen from "react-native-login-screen"

const Favourite = () => {
    return(
         <View style={{
            justifyContent:"center",
            alignContent:"center",
            flex:1
        }}>
            <Text>Favourite</Text>
        </View> 
        //<LoginScreen></LoginScreen>
    )
}
export default Favourite;
 */
import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Button,ImageBackground ,image,TouchableOpacity, Image} from "react-native";
import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
import { render } from "react-dom";
import axios from 'axios';

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
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
  }, []);

  const handleNotification = () => {
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



  const createTwoButtonAlert = () =>
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
 

  const [image, setImage] = useState(null);
  


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    axios.get("http://10.0.2.2:5000/download_video")
        .then(function (response) {
          console.log("test")
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

 
 

 
  
  //render(){
   
    


   return (
    

    <View style = {{height:"100%"}}>
                <ImageBackground source ={require('../images/cloud.png')}
                   // sty={{height:"100%"}}
                    resizeMode="cover"
                    style={styles.image}>
            
   <Text style ={{color: 'black',
      fontSize: 30,
      marginHorizontal: 15,
      marginBottom: 80,
      textAlign: "center",
      fontWeight:"bold",
      color:"yellow"}}>Welcome to our Home</Text>


            
    <TouchableOpacity
        style={styles.button}
        onPress={handleNotification}>
        <Image source={require('../images/bell.png')} resizeMode='contain' style={{height:40,width:30 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>Open Notification</Text>
      </TouchableOpacity> 
     
     <Text></Text>

      <TouchableOpacity
        style={styles.button}
        onPress={pickImage} >
         <Image source={require('../images/eye.png')} resizeMode='contain' style={{height:50,width:40 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>Check the images and videos</Text>
      </TouchableOpacity>

      <Text></Text>

      

      

      
        
       
      
    
      

      
     

      
     
     <Text style={{fontSize: 20, color: 'yellow',textAlign: "center" , fontWeight:"bold",}}>Go check more function in Profile↓↓</Text>
    
    </ImageBackground>
   
    </View>
    
  ); 
//}
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  button:{
    backgroundColor: 'white', 
    borderWidth:2, 
    borderColor:'black',
    justifyContent: 'center',
    padding:10,
    
   
  },
  buttons:{
    backgroundColor: 'white', 
    borderWidth:2, 
    borderColor:'black',
    justifyContent: 'center',
    padding:10,
    marginBottom:400
   
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
