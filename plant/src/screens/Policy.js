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
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOPS/np-1156-105.html')}
      >
      1.家庭暴力法令宣導文宣、影音(連結)
      </Text>



   <Text style={styles.text}>
   宣導文宣、影音，歡迎下載複印，使用時請注意著作權。
    </Text> 

    <Text style={styles.texts}
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOPS/lp-1160-105.html')}
      >
      2.常見問答集(連結)
      </Text>



   <Text style={styles.text}>
   本文件彙集與家庭暴力相關的常見問答，能幫助您了解家庭暴力以及相關服務。
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
