import React from 'react';
import {Text,View,Image, TextInput,Alert,styles, BackHandler,ImageBackground} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { setBadgeCountAsync } from 'expo-notifications';
import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage';


    


export default class Home extends React.Component{
     

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


    getJsonData = () => {
        fetch('http://127.0.0.1:5000/login',
        {method:'GET='}).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                data:responseJson
            })
        })
        .catch((error) => {
            console.error(error)
        });
    }
    componentDidMount = () => {
        this.getJsonData()
    } 
    
    submit(){
        let rjx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let isValid=rjx.test(this.state.mail)
        console.warn(this.state) 
        var that = this 
        if(!isValid){
            this.setState({emailError:"email type is wrong"})
        }
        else{
            this.setState({emailError:""})
        }
        axios.post("https://flask-server-7-15.herokuapp.com/login", //http://10.0.2.2:5000/loginhttps://dashboard.heroku.com/apps/flask-server-7-15/login
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
          that.setState({navigation_state:response.data})
          if (response.data == "email_inexist"){
            alert("電子郵件不存在");
          }
          else if(response.data == "logined"){
            alert("成功登入");
            /*setStringValue = async (value) => {
                try {
                    await AsyncStorage.setItem('key', value)
                } catch(e) {
                    // save error
                }
                
                console.log('Done.')
                }*/
            
            AsyncStorage.setItem('email',that.state.mail).then(
                ()=>{ //成功的操作
                console.log("email儲存成功!");
                },
                );
            AsyncStorage.setItem('password',that.state.password).then(
                ()=>{ //成功的操作
                console.log("password儲存成功!");
                },
                );
            AsyncStorage.getItem('email')
            .then( 
            (result)=> { 
            if (result == null) {
            return;
            }
            console.log("email:" + result);
            })
            //AsyncStorage.setItem('@app:email', that.state.mail); 
            
            //const item = AsyncStorage.getItem('@app:email')
            //console.log(_getStorageValue('@app:email'));
          }
          else if(response.data == "fault"){
            alert("該電子郵件密碼錯誤");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        /*axios.post("http://10.0.2.2:5000/register", 
            { 
              email : this.state.mail ,
              password : this.state.password
            },
            {
              headers:{
              "Content-Type": "application/json"
            }
          })
        .then(function (response) {
          console.log(response);
          if (response.data == "email_exist"){
            alert("電子郵件已被註冊");
          }
          else{
            alert("成功註冊會員");
            navigate('Check');
          }
        })
        .catch(function (error) {
          console.log(error);
        });*/
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
        }else if (field=='state'){
            this.setState({
                return_state:text,
            })
        }
        
     }
     check_state(){
        if(this.state.navigation_state=='logined'){
            this.props.navigation.navigate("Message")
        }   
     }
     
    

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                 {/* <ImageBackground source ={require('../images/background.jpeg')}
                    //styles={{width:"200%",height:"100%"}}
                    resizeMode="cover"
                    style={{flex: 5,
                        justifyContent: "center"}}>  */}
                <Image source ={require('../images/logo.png')}
                    style={{width:"100%",height:"50%",}}
                />
                <Text
                 style={{
                     fontSize:20,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     color:"#0abab5",
                 }}
                >Save Your Life</Text>

                 <Text
                style={{
                   // fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                 
                </Text>
                <Text></Text>
                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.emailError}</Text>
                <View style={{
                     borderWidth:2,
                     borderColor:"#0abab5",
                     paddingVertical:5,
                     marginHorizontal:50,
                     borderRadius:10
                }}>
                   {/*  <Icon name="mail" color="#00716F" size={24}/> */}
                   
                    <TextInput 
                        placeholder='信箱'
                        placeholderTextColor="#0abab5"
                        onBlur={() => this.emailValid()}
                        onChangeText={(text) => this.updateValue(text, 'mail')}
                        style={{paddingHorizontal:10}}
                    />

                   
  
                </View>
                <Text></Text>
                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.passwordError}</Text>
                <View style={{
                    /* flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2  */
                    borderWidth:2,
                    borderColor:"#0abab5",
                    paddingVertical:5,
                    marginHorizontal:50,
                    borderRadius:10
                }}>
                    {/*  <Icon name="mail" color="#00716F" size={24}/>  */}
                    <TextInput 
                        placeholder='密碼'
                        placeholderTextColor="#0abab5"
                        onBlur={() => this.PasswordValid()}
                        secureTextEntry={true}
                        onChangeText={(text) => this.updateValue(text, 'password')}
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>

                <View style={{
                    marginHorizontal:150,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#0abab5",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                
                    
                    <Text  
                      //onPress={()=>this.submit()}
                      //onPress={()=>this.getJsonData()}
                     onPress={()=>{
                        this.submit()                       
                        setTimeout(() => this.check_state(),2000);    
                     }}
                     

                    style={{
                        color:"white",
                        //fontFamily:"SemiBold"
                    }}>登入</Text>
                </View>
                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#0abab5",
                    //fontFamily:"SemiBold",
                    paddingVertical:30,
                    fontWeight:'bold',
                }}>註冊</Text> 

            </View>
        )
    }
}