/* import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'




const Home = ({navigation}) => {
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#00a46c",
               height:"28%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               <Image
                    source={require('../images/1.png')}
                    style={{
                        height:10,
                        width:20,
                        marginTop:50
                    }}
               />
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontSize:28,
                            color:"#FFF",
                            fontWeight:"bold"
                        }}>Hi Uishopy</Text>
                   </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                        <Image
                            source={require('../images/g.png')}
                            style={{height:60,width:60}}
                        />
                   </View>
               </View>
           </View>
           <LinearGradient
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#b1e5d3"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:260
                        }}
                   />
                   <Image
                    source={require('../images/3.png')}
                    style={{height:20,width:20}}
                   />
               </View>
            </LinearGradient>


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Recommended</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>

            
        
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/4.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAMANTHA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </TouchableOpacity>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/5.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>ANGELICA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:45
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/6.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAMANTHA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </View>

                </ScrollView>            

                


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:-80,
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Featured Plants</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text> 
                        </View>
                   </View>
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-100}}
                >
                    <Image
                        source={require("../images/18.png")}
                        style={{marginTop:20,marginHorizontal:20}}
                    />
                     <Image
                        source={require("../images/19.png")}
                        style={{marginTop:20,borderRadius:10}}
                    />
                </ScrollView>
        </View>
    )
}
export default Home;  */
import React from 'react';
import {Text,View,Image, TextInput,Alert,styles, BackHandler,ImageBackground} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { setBadgeCountAsync } from 'expo-notifications';
import axios from 'axios';



    

    

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
        axios.post("http://10.0.2.2:5000/login", 
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
          console.log(response.data);
          that.setState({navigation_state:response.data})
          if (response.data == "email_inexist"){
            alert("電子郵件不存在");
          }
          else if(response.data == "logined"){
            alert("成功登入");
            //#navigate("Message");  
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
                <Image source ={require('../images/anti.png')}
                    style={{width:"100%",height:"43%",}}
                />
                <Text
                 style={{
                     fontSize:35,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Welcome to our app!!</Text>

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
                     borderColor:"#00716F",
                     paddingVertical:5,
                     marginHorizontal:50
                }}>
                   {/*  <Icon name="mail" color="#00716F" size={24}/> */}
                   
                    <TextInput 
                        placeholder='Email'
                        placeholderTextColor="#00716F"
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
                    borderColor:"#00716F",
                    paddingVertical:5,
                    marginHorizontal:50
                }}>
                    {/*  <Icon name="mail" color="#00716F" size={24}/>  */}
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor="#00716F"
                        onBlur={() => this.PasswordValid()}
                        secureTextEntry={true}
                        onChangeText={(text) => this.updateValue(text, 'password')}
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
                      //onPress={()=>this.submit()}
                      //onPress={()=>this.getJsonData()}
                     onPress={()=>{
                        this.submit()                       
                        setTimeout(() => this.check_state(),2000);    
                     }}
                     

                    style={{
                        color:"white",
                        //fontFamily:"SemiBold"
                    }}>Already a member</Text>
                </View>
                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    //fontFamily:"SemiBold",
                    paddingVertical:30,
                    fontWeight:'bold',
                }}>New User</Text> 

            </View>
        )
    }
}