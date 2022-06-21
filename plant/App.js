import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from "./src/navigations/Navigator"
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';


const image = { uri: "https://designimages.appypie.com/appbackground/appbackground-65-nature-outdoors.jpg" };

export default function App (){
  useEffect(() => {
    registerForPushNotification().then(token=>console.log(token)).
    catch(err => console.log(Err))
  }, [])
 
  async function registerForPushNotification(){
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status != 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      // finalStatus = status;
    }
    if (status !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token
  }

  return(
   <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>

  );
  
    
  
}



//export default App;
