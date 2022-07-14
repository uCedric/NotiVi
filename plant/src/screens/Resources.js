import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Button,ImageBackground ,image,TouchableOpacity, Image} from "react-native";
import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
import { render } from "react-dom";



export default class Resources extends React.Component{ 
  render(){
    const {navigate} = this.props.navigation
  return (
    

    <View style={styles.container}>
                <ImageBackground source ={require('../images/cloud.png')}
                   // sty={{height:"100%"}}
                    resizeMode="cover"
                    style={styles.image}>
            
   <Text style ={{color: 'black',
      fontSize: 30,
      marginHorizontal: 15,
      marginBottom: 20,
      textAlign: "center",
      fontWeight:"bold",
      color:"yellow"}}>Resources</Text>


            
    <TouchableOpacity
        style={styles.button}
        >
        <Image source={require('../images/police.png')} resizeMode='contain' style={{height:40,width:40 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>報警</Text>
      </TouchableOpacity> 
     
     <Text></Text>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Deal')}>
         <Image source={require('../images/handle.png')} resizeMode='contain' style={{height:50,width:50 ,marginBottom:-40}} />
        <Text style={styles.buttonText}>處理原則</Text>
      </TouchableOpacity>

      <Text></Text>

       <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Support')}>
         <Image source={require('../images/help.png')} resizeMode='contain' style={{height:50,width:50,marginBottom:-40}} />
        <Text style={styles.buttonText}>求助資源</Text>
      </TouchableOpacity> 

      <Text></Text>

       <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Grant')}>
         <Image source={require('../images/help2.png')} resizeMode='contain' style={{height:50,width:50,marginBottom:-40}} />
        <Text style={styles.buttonText}>補助資源</Text>
      </TouchableOpacity> 

      <Text></Text>

        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Policy')}>
         <Image source={require('../images/help3.png')} resizeMode='contain' style={{height:50,width:50,marginBottom:-40}} />
        <Text style={styles.buttonText}>宣導資源</Text>
      </TouchableOpacity>  

      

      
        
        
      
    
      

      
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      
     
      
    
    </ImageBackground>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
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
