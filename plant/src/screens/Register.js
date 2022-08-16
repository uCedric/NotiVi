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
            name:'',
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
        axios.post("https://flask-server-7-15.herokuapp.com/register", 
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
  
    NameValid(){
        if(this.state.name ==""){
            this.setState({nameError:"name field can not be empty"})
        }
        else{
            this.setState({nameError:""})
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
       else if(field=='name'){
            this.setState({
                name:text,
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
                <Image source ={require('../images/logo.png')}
                    style={{width:"100%",height:"50%"}}
                />
                <Text
                 style={{
                     fontSize:20,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     color:"#0abab5",
                 }}  
                >Save Your Life</Text>


                <Text style={{color:'red', marginLeft:60, fontSize:15, }}>{this.state.nameError}</Text>
                <View style={{
                    borderWidth:2,
                    borderColor:"#0abab5",
                    paddingVertical:5,
                    marginHorizontal:50,
                    borderRadius:10
                }}>
                    
                    <TextInput 
                        placeholder="名稱"
                        placeholderTextColor="#0abab5"
                        onBlur={() => this.NameValid()}
                        onChangeText={(text) => this.updateValue(text, 'name')}
                        style={{paddingHorizontal:10}}
                    />

                
                </View>





 
                
                <Text style={{color:'red', marginLeft:60, fontSize:15, }}>{this.state.emailError}</Text>
                <View style={{
                    borderWidth:2,
                    borderColor:"#0abab5",
                    paddingVertical:5,
                    marginHorizontal:50,
                    borderRadius:10
                }}>
                   
                    <TextInput 
                        placeholder="信箱"
                        placeholderTextColor="#0abab5"
                        onBlur={() => this.emailValid()}
                        onChangeText={(text) => this.updateValue(text, 'mail')}
                        style={{paddingHorizontal:10}}
                    />

                
                </View>
               
                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.passwordError}</Text>
                <View style={{
                    borderWidth:2,
                    borderColor:"#0abab5",
                    paddingVertical:5,
                    marginHorizontal:50,
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
                    borderColor:"#0abab5",
                    paddingVertical:5,
                    marginHorizontal:50,
                    borderRadius:10
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="確認密碼"
                        placeholderTextColor="#0abab5"
                        style={{paddingHorizontal:10}}
                    />
                    

                </View>
                
                <View style={{
                    marginHorizontal:120,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#0abab5",
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
                    }}>確認送出</Text>
                </View>
              
            </View>
        )
    }
} 
