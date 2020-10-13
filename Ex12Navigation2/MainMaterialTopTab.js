import React, {Component} from 'react';
import {View, Text, button, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


import FirstTab from './screen_toptab/FirstTab';
import SecondTab from './screen_toptab/SecondTab';
import ThirdTab from './screen_toptab/ThirdTab';

const Tab = createMaterialTopTabNavigator();

export default class MainMaterialTopTab extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='second'
                    tabBarPosition='top'
                    swipeEnabled={true}
                    tabBarOptions={{
                        activeTintColor:'blue',
                        inactiveTintColor:'gray',
                        showLabel:true,
                        indicatorStyle:{
                            backgroundColor:'green',
                            height:6
                        },
                        showIcon:true
                    }}
                    >
                    <Tab.Screen name='first' component={FirstTab} ></Tab.Screen>
                    <Tab.Screen 
                        name='second' 
                        component={SecondTab}
                        options={{
                            tabBarLabel:'두번째',
                            tabBarIcon:()=><Image source={require('./icons/RN_logo.png')}
                            style={{width:24, height:24}}
                            ></Image>
                        }}
                        ></Tab.Screen>
                    <Tab.Screen name='third' component={ThirdTab} ></Tab.Screen>

                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
