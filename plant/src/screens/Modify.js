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
                <Image source ={require('../images/logo.png')}
                    style={{width:"100%",height:"50%"}}
                
                    //resizeMode="cover"
                    //style={styles.image}
                    />
               


                <Text
                    style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     color:"yellow",
                     //marginTop:-500
                 }}
                ></Text>

                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.passwordError}</Text>
                <View style={{
                    flexDirection:"row",
                    borderWidth:2,
                    borderColor:"#0abab5",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white",
                    borderRadius:10
                }}>

                
                    <TextInput 
                        secureTextEntry
                        placeholder="密碼"
                        placeholderTextColor="#0abab5"
                        onBlur={() => this.PasswordValid()}
                        onChangeText={(text) => this.updateValue(text, 'password')}
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <Text></Text>

                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.passwordError}</Text>
                <View style={{
                   //flexDirection:"row",
                   borderWidth:2,
                   borderColor:"#0abab5",
                   paddingVertical:5,
                   marginHorizontal:50,
                   backgroundColor:"white",
                   borderRadius:10
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="新密碼"
                        placeholderTextColor="#0abab5"
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
                    borderColor:"#0abab5",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white",
                    borderRadius:10
                }}>
                   
                   <TextInput 
                       secureTextEntry
                       placeholder="確認密碼"
                       placeholderTextColor="#0abab5"
                       onBlur={() => this.PasswordValid()}
                       onChangeText={(text) => this.updateValue(text, 'password')}
                       style={{paddingHorizontal:10}}
                    />
                    

                </View>
                <Text></Text>




                <View style={{
                    marginHorizontal:150,
                    alignItems:"center",
                    justifyContent:"space-between",
                    marginTop:30,
                    backgroundColor:"#0abab5",
                    paddingVertical:10,
                    borderRadius:23,
                }}>
                    <Text style={{
                        color:"white",
                       // fontFamily:"SemiBold"

                    }}
                 

                  
                   onPress={()=>{this.submit();navigate('Home')}}>儲存</Text>
                </View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
      flex: 5,
      justifyContent: "center",
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