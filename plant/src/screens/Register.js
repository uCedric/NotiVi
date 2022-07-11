import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import axios from 'axios';
//class based

 export default class Register extends React.Component{
    constructor(){
        super();
        this.state={
            mail:'',
            password:'',
            emailError:'',
            passwordError:'',
            navigation_state:''
        }
    }

    submit(){
        let rjx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let isValid=rjx.test(this.state.mail)
        console.warn(this.state)  
        if(!isValid){
            this.setState({emailError:"email type is wrong"})
        }
        else{
            this.setState({emailError:""})
        }
        axios.post("http://10.0.2.2:5000/register", 
            { 
              email : this.state.mail ,
              password : this.state.password,
            },
            {
              headers:{
              "Content-Type": "application/json"
            }
          })
        .then(function (response) {
          console.log(response.data);
          if (response.data == "email_exist"){
            print(response.data)
            alert("電子郵件已註冊");
          }
          else {
            alert("註冊成功")
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    emailValid(){
        if(this.state.mail ==""){
            this.setState({emailError:"email field can not be empty"})
        }
        else{
            this.setState({emailError:""})
        }
     }

     PasswordValid(){
        if(this.state.password ==""){
            this.setState({passwordError:"password field can not be empty"})
        }
        else{
            this.setState({passwordError:""})
        }
     }

     updateValue(text, field){
        if(field=='mail'){
            this.setState({
                mail:text,
            })
        }else if(field=='password'){
            this.setState({
                password:text,
            })
        }
        
     }
     check_state(){
        if(this.state.navigation_state==''){
            this.props.navigation.navigate("Home")
        }   
     }
    render(){
        const {navigate} = this.props.navigation
        return(
            
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/anti.png')}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}  
                >Register now!!</Text>

                <Text
                style={{
                    
                }}
                >
                </Text>
                <Text style={{color:'red', marginLeft:60, fontSize:15, }}>{this.state.emailError}</Text>
                <View style={{
                    borderWidth:2,
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50
                }}>
                   
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        onBlur={() => this.emailValid()}
                        onChangeText={(text) => this.updateValue(text, 'mail')}
                        style={{paddingHorizontal:10}}
                    />

                
                </View>
                <Text></Text>
                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.passwordError}</Text>
                <View style={{
                    borderWidth:2,
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        onBlur={() => this.PasswordValid()}
                        onChangeText={(text) => this.updateValue(text, 'password')}
                        style={{paddingHorizontal:10}}
                    />


                    

                </View>
                <Text></Text>
                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.passwordError}</Text>
                <View style={{
                   /*  flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2 */
                    borderWidth:2,
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    

                </View>
                
                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text 
                     onPress={()=>{
                        this.submit()                       
                        setTimeout(() => this.check_state(),2000);
                     }}
                    
                    style={{
                        color:"white",
                        //fontFamily:"SemiBold"
                    }}>Register</Text>
                </View>
              
            </View>
        )
    }
} 
