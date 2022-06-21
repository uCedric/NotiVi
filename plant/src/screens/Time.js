import React, { Component } from 'react';
import {useState} from 'react'; 
import {Text,View,Image, TextInput, ImageBackground, StyleSheet,Switch,TouchableOpacity,Button,Platform} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';



//class based

export default class Time extends Component {
       
 



    constructor() {
        super();
        this.label = {false:'close',true:'open'}
        this.state = {
            switch1Value: true,
        }
    }

    toggleSwitch = (value) => {
        this.setState({switch1Value: value})
    }

    

    render() {
      

        return (
            <View style = {{backgroundColor:"#FFF",height:"100%"}}>
                <ImageBackground source ={require('../images/background.jpeg')}
                   // sty={{height:"100%"}}
                    resizeMode="cover"
                    style={styles.image}>
                
                {/* <TouchableOpacity 
                 style={styles.buttons}>
                <Text style={styles.buttonText}>Time Setting</Text>
                </TouchableOpacity>      */}           
              
            
            
            
            
            
            
            
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Switch Setting</Text>
            </TouchableOpacity>
            
                
                <Switch style={styles.switch}
                    onValueChange = {this.toggleSwitch} 
                    value= {this.state.switch1Value} 
                />
                <View><Text style={{
                     //marginTop:20,
                     fontSize:30,
                 }} >Switch：{this.label[this.state.switch1Value]}</Text></View>
                </ImageBackground>
              </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingright:50,
        marginTop:500
   },
   image: {
    flex: 5,
    justifyContent: "center"
  },
  button:{
    backgroundColor: 'white', 
    borderWidth:2, 
    borderColor:'black',
    justifyContent: 'center',
    padding:10,
    marginTop:20
},
buttons:{
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
  switch:{
    marginTop:25,
    position:'absolute',
   /*  right:5,
    top:615 */
    left:355,
    bottom:350
  }
})


 