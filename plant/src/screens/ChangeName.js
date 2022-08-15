import React from 'react';
import {Text,View,Image, TextInput, ImageBackground, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
//class based

export default class Modify extends React.Component{
    constructor(){
        super();
        this.state={
            password:'',
            passwordError:'',
            name:'',
            nameError:''
        }
    }

    submit(){
        console.warn(this.state)  
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
        .catch(function (error) {
          console.log(error);
        });
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
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/logo.png')}
                    style={{width:"100%",height:"50%"}}
                    resizeMode="cover"
                    //style={styles.image}
                    />

                
                <Text style={{color:'red', marginLeft:60, fontSize:15 }}>{this.state.nameError}</Text>
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
                       placeholder="名稱"
                       placeholderTextColor="#0abab5"
                       onBlur={() => this.NameValid()}
                       onChangeText={(text) => this.updateValue(text, 'name')}
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
                    <Text style={{
                        color:"white",
                       // fontFamily:"SemiBold"
                    }}>儲存</Text>
                </View> 
                
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