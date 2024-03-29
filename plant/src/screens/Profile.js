import React from 'react'
import {Image,StyleSheet,View,TouchableOpacity, Text,Button, Alert, ImageBackground, BackHandler,NavigationActions} from 'react-native'
//import LoginScreen from "react-native-login-screen"
import * as ImagePicker from 'expo-image-picker'
import Check from '../screens/Check'
import { render } from 'react-dom'
import  AsyncStorage  from '@react-native-async-storage/async-storage';


export default class Profile extends React.Component{

  async preload(){
    try {
      const email = await AsyncStorage.getItem('email')
      const password = await AsyncStorage.getItem('password')
      
      if(email !== null&&password!=null) {
          // value previously stored
          this.props.navigation.navigate('Check',{email:email,password:password})
      }
      } catch(e) {
          console.log("fail")// error reading value
      }
  } 
   render(){
    const {navigate} = this.props.navigation
  
    //const image = { uri: "https://designimages.appypie.com/appbackground/appbackground-65-nature-outdoors.jpg" };
    
    
   /*  navigation.reset({
      index: 0,
      routes: [{ name: 'Profile' }],
    }); */
   

    return(
     
     

      <View style={{backgroundColor:"#FFF",height:"100%"}}>
      <Image source ={require('../images/logo.png')}
          style={{width:"100%",height:"50%"}}
          resizeMode="cover"/>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={()=>this.preload()}>
      <Image source={require('../images/profile.png')} resizeMode='contain' style={{height:40,width:30,marginBottom:-40}} />
      <Text style={styles.buttonText}>  帳 號</Text>
      </TouchableOpacity>
      <Text></Text>

    
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Resources')}>
        <Image source={require('../images/gear.png')} resizeMode='contain' style={{height:40,width:30,marginBottom:-40}} />
        <Text style={styles.buttonText}>  資 源</Text>
      </TouchableOpacity>
      
      <Text></Text>

      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Home')}>
         <Image source={require('../images/logout.png')} resizeMode='contain' style={{height:40,width:30,marginBottom:-40}} />
        <Text style={styles.buttonText}>  登 出</Text>
      </TouchableOpacity>   

     
      
       
     
                
      
       {/*</ImageBackground>*/}
      
      
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
      marginBottom: 10,
    },
    instructions: {
      color: 'black',
      fontSize: 30,
      marginHorizontal: 15,
      marginTop:150,
      marginBottom: 10,
      textAlign: "center",
      fontWeight:"bold",
      color:"#0abab5"
    },

    button:{
        backgroundColor: '#0abab5', 
        borderWidth:2, 
        borderColor:'white',
        justifyContent: 'center',
        padding:10,
        borderRadius:15,
        marginHorizontal:100,
        
        
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

    text: {
      color: "black",
      fontSize: 45,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "black",
      justifyContent: "center",
      marginBottom:20
    }
});


 

 

//export default Profile;
