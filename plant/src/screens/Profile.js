import React from 'react'
import {Image,StyleSheet,View,TouchableOpacity, Text,Button, Alert, ImageBackground} from 'react-native'
//import LoginScreen from "react-native-login-screen"
import * as ImagePicker from 'expo-image-picker'
import Check from '../screens/Check'
import { render } from 'react-dom'



export default class Profile extends React.Component{
   render(){
    const {navigate} = this.props.navigation
    const image = { uri: "https://designimages.appypie.com/appbackground/appbackground-65-nature-outdoors.jpg" };
    

    return(
      

    <View style={styles.container}>
       <ImageBackground source ={require('../images/background.jpeg')}
                    //styles={{width:"200%",height:"100%"}}
                    resizeMode="cover"
                    style={styles.image}>
                  <Text style={styles.instructions}>Please click the function below</Text>
                  <TouchableOpacity 
        style={styles.button}
        onPress={()=>navigate('Check')}>
      <Text style={styles.buttonText}>View member information</Text>
      </TouchableOpacity>
      <Text></Text>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Modify')}>
        <Text style={styles.buttonText}>Edit member information</Text>
      </TouchableOpacity>
      <Text></Text>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Time')}>
        <Text style={styles.buttonText}>Setting</Text>
      </TouchableOpacity>
      <Text></Text>

     {/*  <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
        <Text style={styles.buttonText}>檢視圖像</Text>
      </TouchableOpacity>
      <Text></Text> */}

      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('TimeSet')}>
        <Text style={styles.buttonText}>Time Setting</Text>
      </TouchableOpacity>
    
      <Text></Text>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Home')}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>   
        </ImageBackground>
                
      
       
      
      
    </View>





      
      

      
      

    
    ) 
   }
  }
    
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    logo: {
      width: 400,
      height: 300,
      marginBottom: 20,
    },
    instructions: {
      color: 'black',
      fontSize: 30,
      marginHorizontal: 15,
      marginBottom: 10,
      textAlign: "center"
    },

    button:{
        backgroundColor: 'white', 
        borderWidth:2, 
        borderColor:'black',
        justifyContent: 'center',
        padding:10
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

    text: {
      color: "black",
      fontSize: 45,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
      justifyContent: "center"
    }
});


 

 

//export default Profile;

