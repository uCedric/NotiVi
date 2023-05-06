import * as React from 'react';
import { useState,useEffect } from "react";
import { View, StyleSheet, Button,TouchableOpacity, Image, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Video, AVPlaybackStatus } from 'expo-av';
import {VideosList} from './firebase'
import init from './firebase'


init();
export default function App() { //export default class Video extends React.Component {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [url, setUrl] = useState();
   
  const [selectedValue, setSelectedValue] = useState(VideosList[0].value);
  
  const test = () =>{
    console.log(VideosList) 
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Text>  選擇影片</Text>
        <Picker
            prompt="Videos"
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
          {VideosList.map((o,index) =>
                  <Picker.Item label={o.key} value = {o.value}/>)
          }  
          
        </Picker>
      </View>

       <Video
        ref={video}
        style={styles.video}
        source={{
          uri:selectedValue//'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      /> 
      
    
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>

       
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  video: {
    alignSelf: 'center',
    width: 360,
    height: 200,
  },
  buttons: {
    //backgroundColor: '#0abab5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color:'#333333'
 },
 text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
 }
});
