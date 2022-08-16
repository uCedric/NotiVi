import * as React from 'react';
import { View, StyleSheet, Button,TouchableOpacity, Image, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Video, AVPlaybackStatus } from 'expo-av';

export default class Videos extends React.Component{ 
   videos
  //const [status, setStatus] = React.useState({});
  constructor(){
    super();
    this.state={
        status:''
    }
}
updateValue(text){
      this.setState({
          status:text,
      })
  
}

  render(){
  return (
    <View style={styles.container}>
      
            
      <Video
        ref={this.videos}
        style={styles.video}
        source={{
          uri:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={this.updateValue(this.state.status)}
        //onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      <View style={styles.buttons}>
        <Button
          title={this.state.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            this.state.status.isPlaying ? videos.current.pauseAsync() : videos.current.playAsync()
          }
        />
      </View>
    </View>
  );
}
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
