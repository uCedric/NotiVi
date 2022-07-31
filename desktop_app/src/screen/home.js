import React,{Component} from 'react'
import {
    Platform,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native'
import axios from 'axios'; 
//import  AsyncStorage  from '@react-native-async-storage/async-storage';

export default class home extends React.Component{
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
            //this.props.navigation.navigate("Message")
            //console.log("logined")
        }   
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
            /*AsyncStorage.setItem('email',that.state.mail).then(
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
            console.log("name:" + result);
            })*/
          }
          else if(response.data == "fault"){
            alert("該電子郵件密碼錯誤");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
     }

    render(){
        return(
            <View style={styles.container}>            
                <Text style={styles.infoText}>welcome to fight identification system{'\n'}Login your account</Text>

                <Text></Text>
                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.emailError}</Text>
                <View style={styles.btn}>                
                    <TextInput 
                        placeholder='Email'
                        placeholderTextColor="#000000"
                        onBlur={() => this.emailValid()}
                        onChangeText={(text) => this.updateValue(text, 'mail')}
                        style={{paddingHorizontal:10}}
                    />                
                </View>
                
                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.passwordError}</Text>
                <View style={styles.btn}>
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor="#000000"
                        onBlur={() => this.PasswordValid()}
                        secureTextEntry={true}
                        onChangeText={(text) => this.updateValue(text, 'password')}
                        style={{paddingHorizontal:10}}
                    />
                </View> 
                <Text></Text>
                <View style={styles.btn}>
                    <Text  
                        onPress={()=>{
                            this.submit()                       
                            setTimeout(() => this.check_state(),2000);    
                        }}

                        style={{
                            color:"#000000",
                            //fontFamily:"SemiBold"
                        }}>login</Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    btn:{
        width:'30%',
        borderWidth:1,
        borderRadius:4,
        height:30,
    },
    infoText:{
        fontSize:24,
        fontWeight:'bold',
    },
    btnText:{
        fontsize:16,
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
      
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    }
})