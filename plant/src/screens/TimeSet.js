 /* import React, { useState, useEffect } from 'react';
 import AlarmClock from "react-native-alarm-clock";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

//import CountDown to show the timer
import CountDown from 'react-native-countdown-component';

//import moment to help you play with date and time
import moment from 'moment';

const App = () => {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    //We are showing the coundown timer for a given expiry date-time
    //If you are making a quize type app then you need to make a simple timer
    //which can be done by using the simple like given below
    //that.setState({ totalDuration: 30 }); //which is 30 sec
    var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC
    var expirydate = '2020-12-23 04:00:45'; //You can set your own date-time
    //Let suppose we have to show the countdown for above date-time
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    setTotalDuration(d);
    //Settign up the duration of countdown in seconds to re-render
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native CountDown Timer | react-native-countdown-component
        </Text>
        <CountDown
          until={totalDuration}
          //duration of countdown in seconds
          timetoShow={('H', 'M', 'S')}
          //formate to show
          onFinish={() => alert('finished')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
      </View>
    </SafeAreaView>
  );
}; 
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});  
 
 */


/* import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  Platform,
  TextInput,
  useColorScheme,
  Switch,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useRef, useState} from 'react';



export default function App(){
 
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS == 'ios') ;
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)

    console.log(fDate + ' (' + fTime + ')')


    }
    
    const showMode = (currentMode) =>  {
      setShow(true);
      setMode(currentMode);
    }
  
    return (
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:20}}>{text}</Text>
        <View style={{margin:20}}>
          <Button title='DatePicker' onPress={() => showMode('date')}/>
        </View>
        <View style={{margin:50}}>
          <Button title='TimePicker' onPress={() => showMode('time')}/>
        </View>

        
        
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
         /> )}  

       <StatusBar style="auto"/> 
      </View>
    );
  }
const styles = StyleSheet.create({
 container: {
    flex:1,
    backgroundColor:'',
    alignItems:'center',
    justifyContent:'center'
  },
  
}); */
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  Platform,
  TextInput,
  useColorScheme,
  Switch,
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
    <><><View>
      <View style={styles.time}>
        <Button onPress={showTimepicker} title="Show time!" />
      </View>
      <View style={styles.timee}>
        <Button onPress={showDatepicker} title="Choose date!" />
      </View>
      <Text>first time: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange} />
      )}
    </View>

      <View style={styles.timee}>
        <Button onPress={showTimepicker} title="Choose time!" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange} />
      )}
    </><><View>
      <View style={styles.time}>
        <Button onPress={showTimepicker} title="Show time!" />
      </View>
      <View style={styles.timee}>
        <Button onPress={showDatepicker} title="Choose date!" />
      </View>
      <Text>first time: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange} />
      )}
    </View>

        <View style={styles.timee}>
          <Button onPress={showTimepicker} title="Choose time!" />
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange} />
        )}
      </></>
  );
}

const styles = StyleSheet.create({
  time: {
     flex:1,
     backgroundColor:'',
     alignItems:'center',
     justifyContent:'center',
     marginBottom:200
   },
   timee: {
    marginBottom:20
    
  },
   
 });

export default App;