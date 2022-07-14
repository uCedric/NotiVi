import React from 'react';
import {Text,View,Image, TextInput, ImageBackground, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import axios from 'axios';

//class based

export default class Modify extends React.Component{
    constructor(){
        super();
        this.state={
            mail:'',
            password:'',
            passwordError:'',
            name:'',
            nameError:''
        }
    }

    submit(){
        var that = this 
        
       
        
            console.log(this.state)     
        setTimeout(() => axios.post("http://10.0.2.2:5000/modify_cli_info", 
        { 
          email : this.state.mail ,
          password : this.state.password
        },
        {
          headers:{
          "Content-Type": "application/json"
        }
        })
        .then(function (response){
            console.log("測試:")
            console.log(that.state.mail)
        })
        .catch(function (error) {
            console.log(error);
        }),3000);
        
        /*axios.post("http://10.0.2.2:5000/modify_cli_info", 
            { 
              email : this.state.mail ,
              password : this.state.password
            },
            {
              headers:{
              "Content-Type": "application/json"
            }
          })
          .then(function (response){
            console.log("測試:")
            console.log(that.state.mail)
          })
        .catch(function (error) {
          console.log(error);
        });*/
        
    }

    PasswordValid(){
        if(this.state.password ==""){
            this.setState({passwordError:"password field can not be empty"})
        }
        else{
            this.setState({passwordError:""})
        }
     }

     NameValid(){
        if(this.state.name ==""){
            this.setState({nameError:"name field can not be empty"})
        }
        else{
            this.setState({nameError:""})
        }
     }

     updateValue(text, field){
         if(field=='password'){
            this.setState({
                password:text,
            })}
        else if(field == 'name'){
                this.setState({
                   name:text,
                })
            }
        
    }




    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <ImageBackground source ={require('../images/background.jpeg')}
                    //style={{width:"100%",height:"35%"}}
                    resizeMode="cover"
                    style={styles.image}>
               
                <Text
                 style={{
                     fontSize:30,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     //marginBottom:500
                     
                 }}  
                >Modify your Password</Text>

                <Text
                style={{
                    //fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                </Text>

                <Text
                    style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     color:"yellow",
                     //marginTop:-500
                 }}
                >Old Password:</Text>

                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.passwordError}</Text>
                <View style={{
                    flexDirection:"row",
                    borderWidth:2,
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white"
                }}>

                
                    <TextInput 
                        secureTextEntry
                        placeholder="Old password"
                        placeholderTextColor="#00716F"
                        onBlur={() => this.PasswordValid()}
                        onChangeText={(text) => this.updateValue(text, 'password')}
                        style={{paddingHorizontal:10}}
                    />
                    

                    {/* <Text
                    style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >123456789</Text> */}

                  

                </View>
                

                    

                
                
                <Text
                    style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     marginTop:10,
                     color:"yellow"
                 }}
                >New Password:</Text>

                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.passwordError}</Text>
                <View style={{
                   //flexDirection:"row",
                   borderWidth:2,
                   borderColor:"#00716F",
                   paddingVertical:5,
                   marginHorizontal:50,
                   backgroundColor:"white"
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="New password"
                        placeholderTextColor="#00716F"
                        onBlur={() => this.PasswordValid()}
                        onChangeText={(text) => this.updateValue(text, 'password')}
                        style={{paddingHorizontal:10}}
                    />
                    

                </View>
                <Text></Text>
                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.passwordError}</Text>
                <View style={{
                   // flexDirection:"row",
                    borderWidth:2,
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white"
                }}>
                   
                   <TextInput 
                       secureTextEntry
                       placeholder="Confirm password"
                       placeholderTextColor="#00716F"
                       onBlur={() => this.PasswordValid()}
                       onChangeText={(text) => this.updateValue(text, 'password')}
                       style={{paddingHorizontal:10}}
                    />
                    

                </View>
                <Text></Text>

                {/* <Text
                    style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     color:"yellow"
                 }}
                >Old Name:</Text>
              
               <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.nameError}</Text>

                <View style={{
                    flexDirection:"row",
                    borderWidth:2,
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white"
                }}>

                
                    <TextInput 
                        secureTextEntry
                        placeholder="Old name"
                        placeholderTextColor="#00716F"
                        onBlur={() => this.nameValid()}
                        onChangeText={(text) => this.updateValue(text, 'name')}
                        style={{paddingHorizontal:10}}
                    />
                    

                 

                  

                </View>
                

                    

                
                
                <Text
                    style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     marginTop:10,
                     color:"yellow"
                 }}
                >New Name:</Text>

                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.nameError}</Text>
                <View style={{
                   //flexDirection:"row",
                   borderWidth:2,
                   borderColor:"#00716F",
                   paddingVertical:5,
                   marginHorizontal:50,
                   backgroundColor:"white"
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="New name"
                        placeholderTextColor="#00716F"
                        onBlur={() => this.NameValid()}
                        onChangeText={(text) => this.updateValue(text, 'name')}
                        style={{paddingHorizontal:10}}
                    />
                    

                </View>
                <Text></Text>
                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.nameError}</Text>
                <View style={{
                   // flexDirection:"row",
                    borderWidth:2,
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white"
                }}>
                   
                   <TextInput 
                       secureTextEntry
                       placeholder="Confirm name"
                       placeholderTextColor="#00716F"
                       onBlur={() => this.NameValid()}
                       onChangeText={(text) => this.updateValue(text, 'name')}
                       style={{paddingHorizontal:10}}
                    />
                    

                </View>

               */}



                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                       // fontFamily:"SemiBold"

                    }}
                 

                  
                   onPress={()=>{this.submit();navigate('Home')}}>Save</Text>
                </View>

                </ImageBackground>
            </View>
        )
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