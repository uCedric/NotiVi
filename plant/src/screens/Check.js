/*import React from 'react';
import {Text,View,Image, TextInput,ImageBackground,StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


export default class Check extends React.Component{
    
    render(){

        return(
            <View style={{height:"100%"}}>
                <ImageBackground source ={require('../images/background.jpeg')}
                    //<Image source ={require('../images/anti.png')}</Image>
                    //style={{width:"100%",height:"35%"}}
                    resizeMode="cover"
                    style={styles.image}>

                 <Text
                 style={{
                     fontSize:35,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     alignItems:"top"
                 }}
                >This is your account</Text>

            <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2,
                    backgroundColor:"white"
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <Text
                    style={{
                     fontSize:15,
                    // fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >abcdefgh@gmail.com</Text>

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2,
                    backgroundColor:"white"
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <Text
                     style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >。。。。。。</Text>
                

                    

                </View>

                


        </ImageBackground>
        </View>
                
        )    

            /*     <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                
                </Text> 

                
        
    }
}

const styles = StyleSheet.create({
    image: {
      flex: 5,
      justifyContent: "center"
    },  

    text: {
      color: "black",
      fontSize: 45,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
      justifyContent: "center"
    }
});*/
import React from 'react';
import {Text,View,Image, TextInput,ImageBackground,StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


export default class Check extends React.Component{
    
    render(){

        return(
            <View style={{height:"100%"}}>
                <ImageBackground source ={require('../images/background.jpeg')}
                    //<Image source ={require('../images/anti.png')}</Image>
                    //style={{width:"100%",height:"35%"}}
                    resizeMode="cover"
                    style={styles.image}>

                 <Text
                 style={{
                     fontSize:35,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     //alignItems:"top"
                 }}
                >This is your account</Text>

            <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2,
                    backgroundColor:"white"
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <Text
                    style={{
                     fontSize:15,
                    // fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >abcdefgh@gmail.com</Text>

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2,
                    backgroundColor:"white"
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <Text
                     style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >。。。。。。</Text>
                

                    

                </View>

                


        </ImageBackground>
        </View>
                
        )    

            /*     <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                
                </Text> */

                
        
    }
}

const styles = StyleSheet.create({
    image: {
      flex: 5,
      justifyContent: "center"
    },  

    text: {
      color: "black",
      fontSize: 45,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
      justifyContent: "center"
    }
});