import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Button,ImageBackground ,image,TouchableOpacity, Image} from "react-native";
import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
import { render } from "react-dom";
import { Linking } from 'react-native';



export default function App() {
 
  return (
    

    <View style={styles.container}>
                <ImageBackground source ={require('../images/cloud.png')}
                   // sty={{height:"100%"}}
                    resizeMode="cover"
                    style={styles.image}>
            
   <Text style={styles.texts}
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOPS/cp-1160-6410-105.html')}
      >
      1.哪些人屬於家庭暴力防治法所保護的範圍？(連結)
      </Text>



   <Text style={styles.text}>
   家庭成員包括：配偶或前配偶，現有或曾有同居關係、家長家屬或家屬間關係者，直系血親或直系姻親，四親等以內之旁系血親或旁系姻親，包括看見或直接聽聞家庭暴力之兒童或少年。
另外親密關係之未同居伴侶，亦即以情感或性行為為基礎，發展親密社會互動關係之一般男女朋友或同性伴侶，雖然並非家庭成員關係，但亦可聲請保護令並尋求相關單位的協助與保護。
    </Text> 

    <Text style={styles.texts}
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOPS/cp-1160-6418-105.html')}
      >
      2.『保護令』保護什麼？有哪些相關規定？(連結)
      </Text>



   <Text style={styles.text}>
   保護令是透過國家公權力賦予加害人一定的行為義務，以保護被害人不受加害人的傷害，現行有三種保護令得聲請，可參閱個別聲請說明。
    </Text> 

    <Text style={styles.texts}
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOPS/cp-1155-7963-105.html')}
      >
      3.受理家庭暴力服務流程圖(連結)
      </Text>

      <Text style={styles.text}>
      家庭暴力案件服務流程圖。
    </Text> 

    <Text style={styles.texts}
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOPS/cp-1289-45968-105.html')}
      >
      4.成人保護案件通報表(連結)
      </Text>

      <Text style={styles.text}>
      提供家庭暴力防治法第50條、老人福利法第43條以及身心障礙者權益保障法第76條範定的責任通報人，
      在執行職務知悉疑似有家庭暴力或老人遭受虐待、疏忽、遺棄之情事或對身心障礙者有遺棄、虐待、限制自由等不當對待之行為
      ，應立即通報當地主管機關，並在24小時內填具本通報表送當地主管機關（<Text style={styles.texts} onPress={() => Linking.openURL('https://ecare.mohw.gov.tw/')}
      >網路通報(連結)</Text>
      
      或傳真通報擇一），通報時應注意維護被害人之秘密及隱私
      ，不得洩露或公開。
    </Text> 



  
            
   
      
        
        
      
    
      

      
      

      
     
      
    
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  text:{
    fontSize: 14,
    marginHorizontal: 15,
    marginBottom: 60,
    textAlign: "center",
    fontWeight:"bold",
    color:"black"
  },
  texts:{
    fontSize: 15,
    marginHorizontal: 15,
    //marginBottom: 60,
    textAlign: "center",
    fontWeight:"bold",
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
});
