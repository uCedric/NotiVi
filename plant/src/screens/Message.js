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
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button,ImageBackground ,image,TouchableOpacity} from "react-native";
import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";

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
  return (
    <View style = {{height:"100%"}}>
                <ImageBackground source ={require('../images/background.jpeg')}
                   // sty={{height:"100%"}}
                    resizeMode="cover"
                    style={styles.image}>
            
            
            
    <TouchableOpacity
        style={styles.button}
        onPress={handleNotification}>
        <Text style={styles.buttonText}>Open Notification</Text>
      </TouchableOpacity> 
    
      

      
     
      
    
    </ImageBackground>
    </View>
  );
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
    marginTop:20
   
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
