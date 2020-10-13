import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet, Button, Text, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstTab from './screen_bottomtab/FirstTab';
import SecondTab from './screen_bottomtab/SecondTab';
import ThirdTab from './screen_bottomtab/ThirdTab';



const BottomTab = createBottomTabNavigator();

export default class MainBottom extends Component{
    render(){
        return(
            <NavigationContainer>
                <BottomTab.Navigator
                     initialRouteName="second"
                     tabBarOptions={{
                         activeTintColor:'red',
                         inactiveTintColor:'gray',
                         activeBackgroundColor:'yellow',
                         showLabel:true,
                         labelPosition:'below-icon'
                     }}>
                    <BottomTab.Screen 
                         name = "first" 
                         component={FirstTab}
                         options={{
                             tabBarLabel:'첫번째',
                             tabBarBadge: 'new',
                            //  tabBarIcon: ()=>{return <Image source={ require('./icons/RN_logo.png')}
                            //  style={{width=24, height=24}}></Image>}
                         }}
                         ></BottomTab.Screen>
                    <BottomTab.Screen name = "second" component={SecondTab}></BottomTab.Screen>
                    <BottomTab.Screen name = "third" component={ThirdTab}></BottomTab.Screen>
                </BottomTab.Navigator>
            </NavigationContainer>
        );
    }

    // componentDidMount(){
    //     this.props.Navigattion.setOptions({
    //         tabBarLabel:'두번째',
    //         tabBarIcon:()=> <Image source={}></Image>;
    //     };)
    // }
    // }

}