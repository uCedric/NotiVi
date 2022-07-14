/* import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation-stack';
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Favourite from '../screens/Favourite'
import Profile from '../screens/Profile'
import {Image} from 'react-native'
import Register from '../screens/Register'



const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/8.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/9.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/10.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
       </Tab.Navigator>
    );
};

/* const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator); 


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
} 

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator; */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
//import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Message from '../screens/Message'
import Profile from '../screens/Profile'
import {Image} from 'react-native'
import Register from '../screens/Register'
import Check from '../screens/Check'
import Modify from '../screens/Modify'
import Time from '../screens/Time'
import TimeSet from '../screens/TimeSet'
import ImageCheck from '../screens/ImageCheck'
import Begin from '../screens/Begin'
import ChangeName from '../screens/ChangeName'
import Resources from '../screens/Resources'
import Deal from '../screens/Deal'
import Support from '../screens/Support'
import Grant from '../screens/Grant'
import Policy from '../screens/Policy'

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2
                }
            }}
        >
           {/*  <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/8.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            /> */}

            <Tab.Screen
                name="Message"
                component={Message}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/9.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/10.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    navigationOptions:  {
        title: 'Profile',
        headerLeft: ()=> null
    },
   
    headerShown: false,
    
}

/* const aaa ={
    navigationOptions:  {
        title: 'Message',
        headerLeft: null
    }
} */

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Begin" component={Begin}/>
            <Stack.Screen name="Message" component={BottomTabNavigator}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Check" component={Check}/>
            <Stack.Screen name="Modify" component={Modify}/>
            <Stack.Screen name="Time" component={Time}/>
            <Stack.Screen name="TimeSet" component={TimeSet}/>
            <Stack.Screen name="ImageCheck" component={ImageCheck}/>
            <Stack.Screen name="ChangeName" component={ChangeName}/>
            <Stack.Screen name="Resources" component={Resources}/>
            <Stack.Screen name="Deal" component={Deal}/>
            <Stack.Screen name="Support" component={Support}/>
            <Stack.Screen name="Grant" component={Grant}/>
            <Stack.Screen name="Policy" component={Policy}/>
            <Stack.Screen name="Profile" component={Profile}/>
           
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;


