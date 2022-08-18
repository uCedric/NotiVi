import * as React from 'react';
import { useState,useEffect } from "react";
import { View, StyleSheet, Button,TouchableOpacity, Image, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Video, AVPlaybackStatus } from 'expo-av';
import {VideosList} from './firebase'
import init from './firebase'

export default function App() { //export default class Video extends React.Component {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  //const [url, setUrl] = useState();
  init();
  const test = () =>{
    console.log(VideosList) 
  }
  
  const url = VideosList[0].value// errro:init 會瘋狂抓資料到list然後爆掉
  
  return (
    <View style={styles.container}>
      
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri:url//'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
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

      <View style={styles.buttons}>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={test}
          title="test"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
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
