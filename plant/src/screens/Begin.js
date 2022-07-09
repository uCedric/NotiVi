import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react'

// https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/moroccan-flower-dark.png



export default class Begin extends React.Component{
  //const image = { uri: "https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/moroccan-flower-dark.png" };
  render(){
  const localImage = require("../images/violence.png");
  const {navigate} = this.props.navigation

  

 
  return (


    
    <ImageBackground source={localImage} resizeMode='cover' style={styles.container}>
      <StatusBar style="auto" />

      {/* <Text style={{fontSize:50, flex:1, marginTop:30, color:"yellow" }}>App name</Text> */}
 
      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigate('Home')}>
        <Text style={styles.buttonText}>Get started→</Text>
      </TouchableOpacity> 

    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent: 'center',
   
    
  },
  textStyle: {
    color: "#ffffff",
    backgroundColor: "#00000099",
    padding: 16
  },
  button:{
    //marginHorizontal:55,
    //alignItems:"center",
    //justifyContent:"center",
    backgroundColor:"#7B68EE",
    paddingVertical:10,
    padding:20,
    borderRadius:23,
    marginBottom:-750
},

buttonText:{
    fontSize: 25, 
    color: 'black',
    textAlign: "center"
}
});