import React, { useState, useEffect } from 'react';
import {Alert,TouchableOpacity,Text, Button, Image, View, Platform,StyleSheet,ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {

  const createTwoButtonAlert = () =>
    Alert.alert(
    "Your parents are in danger",
    "Go save them",
    [
        {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
    );


  const [image, setImage] = useState(null);
  


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{height:"100%"}}>
      <ImageBackground source ={require('../images/logo.png')}
                    //<Image source ={require('../images/anti.png')}</Image>
                    //style={{width:"100%",height:"35%"}}
                    resizeMode="cover"
                    style={styles.image}>
    <View style={{marginTop:800,height:"100%"}}>
     
    {/* <TouchableOpacity
        style={styles.buttons}
        onPress={createTwoButtonAlert}>
        <Text style={styles.buttonText}>Messages</Text>
      
        </TouchableOpacity> */}
    
        <Text></Text>
   
    <TouchableOpacity
        style={styles.button}
        onPress={pickImage}>
        <Text style={styles.buttonText}>Check the images and videos</Text>
      </TouchableOpacity> 
    
      

      
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      
    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 5,
    justifyContent: "center"
  },
  title:{
    color:"yellow"
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
  borderColor:'black0',
  justifyContent: 'center',
  padding:10,
},

buttonText:{
    fontSize: 25, 
    color: 'black',
    textAlign: "center"
},
});

