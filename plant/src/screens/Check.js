
import React from 'react';
import {Text,View,Image, TextInput,ImageBackground,StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export default class Check extends React.Component{
    constructor(props){
        super(props);
        const {navigation} = this.props;
        //const data = navigation.getParam("email"); 
        this.state={
            email:props.route.params.email,
            password:props.route.params.password,
            emailError:'',
            passwordError:'',
            navigation_state:''
        }
    }
    async preload(){
        await this.getData()
        if(this.state.email==null)
            console.log("fail")
    }
    getData = async() => {
        try {
        const value = await AsyncStorage.getItem('email')
        if(value !== null) {
            // value previously stored
            this.setState({email:value})
        }
        } catch(e) {
            console.log("fail")// error reading value
        }
        console.log("done")
    }
    submit(){
        AsyncStorage.getItem('email')
            .then( 
            (result)=> { 
            if (result == null) {
            return;
            }
            this.setState({email:result})
            console.log("name:" + result);
            })
    }
    render(){
        const {navigate} = this.props.navigation
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/logo.png')}
                    style={{width:"100%",height:"50%"}}
                    resizeMode="cover"
                    //style={styles.image}
                    />

            <Text style={{
                     fontSize:15,
                     alignSelf:"center",
                     color:"#0abab5",
                     
                 }}>信箱</Text>
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
                    borderColor:"#0abab5",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white",
                    borderRadius:10
                }}>
                    
                
                    <Text
                    style={{
                     fontSize:15,
                    // fontFamily:"SemiBold",
                     alignSelf:"center",
                     marginHorizontal:10,
                     color:"#0abab5"
                 }}
                >{this.state.email}</Text>

               
  
                </View>

                <Text></Text>
                    <Text style={{
                        fontSize:15,
                        alignSelf:"center",
                        color:"#0abab5",
                        
                    }}>密碼</Text>
                <View style={{
                    flexDirection:"row",
                    borderWidth:2,
                    borderColor:"#0abab5",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white",
                    borderRadius:10
                }}>
                    
                    <Text
                     style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     color:"#0abab5",
                     marginHorizontal:10,
                 }}
                >{this.state.password}</Text>
              </View>
             
              <Text></Text>
                    <Text style={{
                        fontSize:15,
                        alignSelf:"center",
                        color:"#0abab5",
                        
                    }}>名稱</Text>
              <View style={{
                    flexDirection:"row",
                    borderWidth:2,
                    borderColor:"#0abab5",
                    paddingVertical:5,
                    marginHorizontal:50,
                    backgroundColor:"white",
                    borderRadius:10
                }}>
                    
                    <Text
                     style={{
                     fontSize:15,
                     //fontFamily:"SemiBold",
                     alignSelf:"center",
                     color:"#0abab5",
                     marginHorizontal:10,
                 }}
                >user1</Text>
           
           </View>

           <Text 
                
                onPress={()=>{
                            //navigate('Modify')
                            //this.submit()                                                    
                        }}
                
                style={{
                    alignSelf:"center",
                    color:"#0abab5",
                    //fontFamily:"SemiBold",
                    paddingVertical:30,
                    fontWeight:'bold',
                }}>修改密碼</Text> 

           <Text 
                
                onPress={()=>navigate('ChangeName')}
                
                style={{

                    alignSelf:"center",
                    color:"#0abab5",
                    //fontFamily:"SemiBold",
                    paddingVertical:10,
                    fontWeight:'bold',
                }}>修改名稱</Text> 

            
                


        
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