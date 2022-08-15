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
    axios.get("https://flask-server-7-15.herokuapp.com/download_video")
        .then(function (response) {
          console.log("test")
          console.log(response)
          console.warn(response)
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
    

    //<View style = {styles.container}>
    <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/logo.png')}
                    style={{width:"100%",height:"50%"}}
                    resizeMode="cover"/>
 
    <TouchableOpacity
        style={styles.button}
        onPress={handleNotification}>
        <Image source={require('../images/notification.png')} resizeMode='contain' style={{height:40,width:30 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>  通 知</Text>
      </TouchableOpacity> 
 

      <TouchableOpacity
        style={styles.button}
        onPress={pickImage} >
         <Image source={require('../images/video.png')} resizeMode='contain' style={{height:40,width:30 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>  影 片</Text>
      </TouchableOpacity>

      
    </View>
    
  ); 
//}
   
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
