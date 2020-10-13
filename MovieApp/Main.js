import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//최상위 Navigator에 의해 전환될 스크린(컴포넌트) or Navigator 사용을 위한 import
import Intro from './Intro'; 
import LoginNav from './navigators/LoginStackNav';
import MainDrawerNav from './navigators/MainDrawerNav';

//앱 전체 화면을 전환할수 있도록 도와주는 stack navigator생성
const RootStack = createStackNavigator();

// NavigationContainer를 가진 root 컴포넌트
export default class Main extends Component{
    render(){
        return(
            <NavigationContainer>

                {/* 1. 우선 로그인 관련 화면부터 제작 */}
                <RootStack.Navigator screenOptions={ {headerShown:false} } >
                    <RootStack.Screen name="intro" component={Intro} ></RootStack.Screen>
                    <RootStack.Screen name="LoginNav" component={ LoginNav } ></RootStack.Screen>
                    <RootStack.Screen name="MainDrawerNav" component={ MainDrawerNav } ></RootStack.Screen>
                </RootStack.Navigator>

            </NavigationContainer>
        );
    }
}