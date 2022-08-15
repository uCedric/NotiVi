import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Button,ImageBackground ,image,TouchableOpacity, Image} from "react-native";
import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
import { render } from "react-dom";
import { Linking } from 'react-native';



export default function App() {
 
  return (
    

    <View style={{backgroundColor:"#FFF",height:"100%"}}>
    <Image source ={require('../images/logo.png')}
        style={{width:"100%",height:"50%"}}
        resizeMode="cover"/>
            
   <Text style={styles.texts}
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOPS/cp-1179-6481-105.html')}
      >
      1.家庭暴力被害人可申請之相關補助(連結)
      </Text>



   <Text style={styles.text}>
   遭受家庭暴力，擔心自己沒有經濟能力，離開家庭後，沒有錢可以生活，此時可參考本文健了解緊急生活扶助費用、驗傷醫療等補助資訊。
    </Text> 

    
 
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  text:{
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 60,
    textAlign: "center",
    fontWeight:"bold",
    color:"black"
  },
  texts:{
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 20,
    textAlign: "center",
    fontWeight:"bold",
    color:"#0abab5"
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
