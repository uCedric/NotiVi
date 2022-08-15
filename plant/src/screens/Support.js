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
    
    <View style={{backgroundColor:"#FFF",height:"100%"}}>
    <Image source ={require('../images/logo.png')}
        style={{width:"100%",height:"50%"}}
        resizeMode="cover"/>
            
   <Text style={styles.texts}
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOPS/cp-1179-6482-105.html')}
      >
      1.各直轄市、縣(市)政府家庭暴力及性侵害防治中心(連結)
      </Text>



   <Text style={styles.text}>
   如果您對通報事宜、家庭暴力案件處理有任何疑問，也可以與各縣市政府的家庭暴力防治中心聯繫。
    </Text> 

    <Text style={styles.texts}
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOPS/cp-1179-6483-105.html')}
      >
      2.各縣市政府駐地方法院家庭暴力事件服務處(連結)
      </Text>



   <Text style={styles.text}>
   若您想聲請保護令，但不知道如何撰寫保護令聲請書狀或有陪同出庭之需要，可就近尋求地方法院家庭暴力事件服務處協助。
    </Text> 

    <Text style={styles.texts}
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOPS/cp-1183-6499-105.html')}
      >
      3.113保護專線(連結)
      </Text>

      <Text style={styles.text}>
      任何時間，若您發現有兒童、少年、老人、身心障礙者遭受不當對待，或您本身有遭受家庭暴力、性侵害、性騷擾等情事，
      不分縣市、24小時全天候可以手機、市話、簡訊（聽語障人士）直撥「113」，將有專業值機社工人員與您線上對談，
      提供您相關諮詢、通報、轉介等專業服務，113保護專線將遵循保密原則，不會任意向第三人透漏您的個人資料，請安心撥打。
    </Text> 

    <Text style={styles.texts}
      onPress={() => Linking.openURL('https://ecare.mohw.gov.tw/WebChattingCtrl?func=getChattingBoardByClient')}
      >
      4.113線上諮詢(連結)
      </Text>

      <Text style={styles.text}>
      如果您是聽語障或不便言談的朋友，也可以手機傳簡訊至113，或利用113線上諮詢與保護專線的專業人員聯繫。
    </Text> 

    <Text style={styles.texts}
      onPress={() => Linking.openURL('https://ecare.mohw.gov.tw/#')}
      >
      5.關懷E起來(連結)
      </Text>

      <Text style={styles.text}>
      關懷E起來是一個網路通報平台，民眾可以在線上通報及諮詢有關家庭暴力、性侵害及兒少保護事項，如果發現身旁兒少疑似遭受疏忽、虐待等不當對待情形，請立即上網諮詢通報。
    </Text> 

    <Text style={styles.texts}
      onPress={() => Linking.openURL('https://dep.mohw.gov.tw/DOMHAOH/lp-465-107.html')}
      >
      6.家庭暴力相對人輔導男性關懷專線0800-013-999(連結)
      </Text>

      <Text style={styles.text}>
      鑑於多數男性，對於傾訴心情、對外求助較排斥，本專線以保護隱私之方式提供具家庭議題困擾之男性諮詢服務。
    </Text> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  text:{
    fontSize: 12.5,
    marginHorizontal: 15,
    marginBottom: 50,
    textAlign: "center",
    fontWeight:"bold",
    color:"black"
  },
  texts:{
    fontSize: 12,
    marginHorizontal: 15,
    //marginBottom: 10,
    textAlign: "center",
    fontWeight:"bold",
    color:"#0abab5"
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
