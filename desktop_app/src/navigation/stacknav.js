import React,{Component} from "react";
import {createStackNavigator} from '@react-navigation/stack'
import home from '../screen/home'

const stack = createStackNavigator()

export default class stacknav extends Component{
    render(){
        <stack.Navigator>
            <stack.Screen name='home' component={home}/>
        </stack.Navigator>
    }
}