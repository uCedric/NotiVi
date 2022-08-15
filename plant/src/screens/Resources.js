import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Button,ImageBackground ,image,TouchableOpacity, Image} from "react-native";
import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
import { render } from "react-dom";
import { Linking } from 'react-native';

export default class Resources extends React.Component{ 
  phonecall = () =>{
    const url='tel:110'
    Linking.openURL(url)
}
  render(){
    const {navigate} = this.props.navigation
  return (
    

    <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/logo.png')}
                    style={{width:"100%",height:"50%"}}
                    resizeMode="cover"/>
            
   


            
    <TouchableOpacity
        style={styles.button}
        onPress={this.phonecall}>
        <Image source={require('../images/call.png')} resizeMode='contain' style={{height:40,width:30 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>  報 警</Text>
      </TouchableOpacity> 
     
     <Text></Text>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Deal')}>
         <Image source={require('../images/process.png')} resizeMode='contain' style={{height:40,width:30 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>  處理原則</Text>
      </TouchableOpacity>

      <Text></Text>

       <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Support')}>
         <Image source={require('../images/help.png')} resizeMode='contain' style={{height:40,width:30,marginBottom:-40}} />
        <Text style={styles.buttonText}>  求助資源</Text>
      </TouchableOpacity> 

      <Text></Text>

       <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Grant')}>
         <Image source={require('../images/money.png')} resizeMode='contain' style={{height:40,width:30,marginBottom:-40}} />
        <Text style={styles.buttonText}>  補助資源</Text>
      </TouchableOpacity> 

      <Text></Text>

        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Policy')}>
         <Image source={require('../images/class.png')} resizeMode='contain' style={{height:40,width:30,marginBottom:-40}} />
        <Text style={styles.buttonText}>  宣導資源</Text>
      </TouchableOpacity>  

      

      
        
        
      
    
      

      
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      
     
      
    
  
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  button:{
    backgroundColor: '#0abab5', 
    borderWidth:2, 
    borderColor:'white',
    justifyContent: 'center',
    padding:10,
    marginHorizontal:100,
    borderRadius:10
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
