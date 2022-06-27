import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useRef, useState} from 'react';

export const App = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  
  


 


  return (
    <View style={{height:"100%"}}>
    <ImageBackground source ={require('../images/background.jpeg')}
        resizeMode="cover"
        style={styles.image}>
    <><><View>
     {/*  <View style={styles.time}>
        <Button onPress={showTimepicker} title="Show time!" />
      </View> */}

      <TouchableOpacity
        style={styles.button}
        onPress={showDatepicker}>
        <Text style={styles.buttonText}>Choose first date</Text>
      </TouchableOpacity> 

      <TouchableOpacity
        style={styles.button}
        onPress={showTimepicker}>
        <Text style={styles.buttonText}>Choose first time</Text>
      </TouchableOpacity> 

      {/* <View style={styles.timee}>
       <Button onPress={showDatepicker} color="red" title="Choose date!" /> 
       
      </View> */}
     
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange} />
      )}
    </View>

    

      {/* <View style={styles.timee}>
      <Button onPress={showTimepicker} color="red" title="Choose time!" /> 
      </View> */}
 
      <Text style={styles.text}>first time: {date.toLocaleString()}</Text>
      {/* {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange} />
      )} */}
    </><><View>
      {/* <View style={styles.time}>
        <Button onPress={showTimepicker} color="red" title="Show time!" />
      </View> */}

      <TouchableOpacity
        style={styles.button}
        onPress={showDatepicker}>
        <Text style={styles.buttonText}>Choose second date</Text>
      </TouchableOpacity> 

      <TouchableOpacity
        style={styles.button}
        onPress={showTimepicker}>
        <Text style={styles.buttonText}>Choose second time</Text>
      </TouchableOpacity> 

    </View>

    {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange} />
        )}
        <Text style={styles.text}>second time: {date.toLocaleString()}</Text>
        
      </></>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  time: {
     flex:1,
     backgroundColor:'',
     alignItems:'center',
     justifyContent:'center',
     marginBottom:20
   },
   timee: {
    marginBottom:40
    
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
  buttonText:{
    fontSize: 25, 
    color: 'black',
    textAlign: "center"
}, 
text:{
  fontSize:20
}
   
 });

export default App;