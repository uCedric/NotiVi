import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from "./src/navigations/Navigator"
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';


const image = { uri: "https://designimages.appypie.com/appbackground/appbackground-65-nature-outdoors.jpg" };

export default function App (){
  

  return(
    <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>

  );
  
    
  
}



//export default App;
