
import React from 'react';
import {Text,View,Image, TextInput,ImageBackground,StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


export default class Check extends React.Component{
    
    render(){
        const {navigate} = this.props.navigation
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
                     alignItems:"stretch",
                    // flex:1,
                     //marginTop:80
                 }}
                >This is your account</Text>
              
              <Text></Text>

            <Text style={{
                     fontSize:15,
                     alignSelf:"center",
                     color:"yellow",
                     
                 }}>Email</Text>
            <View style={{
                    /* flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:3,
                    backgroundColor:"white" */
                    flexDirection:"row",
                    borderWidth:2,
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white"
                }}>
                    
                    <Text
                    style={{
                     fontSize:15,
                    // fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >abcdefgh@gmail.com</Text>

               
  
                </View>

                <Text></Text>
                    <Text style={{
                        fontSize:15,
                        alignSelf:"center",
                        color:"yellow",
                        
                    }}>Password</Text>
                <View style={{
                    flexDirection:"row",
                    borderWidth:2,
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white"
                }}>
                    
                    <Text
                     style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >。。。。。。</Text>
              </View>
             
              <Text></Text>
                    <Text style={{
                        fontSize:15,
                        alignSelf:"center",
                        color:"yellow",
                        
                    }}>Name</Text>
              <View style={{
                    flexDirection:"row",
                    borderWidth:2,
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white"
                }}>
                    
                    <Text
                     style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >aaaaaa</Text>
           
           </View>

           <Text 
                
                onPress={()=>navigate('Modify')}
                
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    //fontFamily:"SemiBold",
                    paddingVertical:30,
                    fontWeight:'bold',
                }}>Modify your password</Text> 

           <Text 
                
                onPress={()=>navigate('ChangeName')}
                
                style={{

                    alignSelf:"center",
                    color:"#00716F",
                    //fontFamily:"SemiBold",
                    paddingVertical:30,
                    fontWeight:'bold',
                }}>Modify your Name</Text> 

            
                


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