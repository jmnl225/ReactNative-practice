import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Second from './screen/Second';
import Home from './screen/Home';
import { Alert, Button, View, Image, Text } from 'react-native';



export default class Main extends Component{

    //Stack Navigator 객체 생성
    const = createStackNavigator

    render(){
        return(
            <NavigationContainer>
            {/* Stack Navitor 컴포넌트 및 화면들 지정. 전체적인 디자인 설정 */}\
                <StackNavigator
                    ScreenOptions={{
                        headerTintColor:'red',
                        headerTitleSyle:{
                            fontWeight:'bold'
                        },
                        headerStyle:{
                            backgroundColor:'green'
                        },
                        headerTitleAlign:'center'
                    }}>

             {/* 각 스크린의 화면 옵션 설정. */}
                    <Stack.Screen  name="home" Component={Home} options={ {title:'홈'} } ></Stack.Screen>
                    <Stack.Screen name="second" Component={Second} 
                    options={{
                        title:'두번째',
                        headerTintColor:'white',
                        headerRight: ()=>{return <Button title="menu" onPress={()=>{Alert.alert('menu')}} ></Button>;},
                        // headerTitle: ()=>{return <LogoHeader></LogoHeader>},
                        headerShown: true
                    }}></Stack.Screen>
                    

                </StackNavigator>
            </NavigationContainer>
        );
    }
}

class LogoHeader extends Component{
    render(){
        return(
            <View style={{flexDirection:'row', paddingLeft:8, alignItems:'center'}}>
                <Image source={require('./icons/RN_logo.png')} style={{width:30, height:30}} ></Image>
                <Text style={{color:'blue', fontWeight:'bold', fontSize:24, marginLeft:16}}> SECOND </Text>
            </View>
        );
    }

    //render() 메소드 전에 자동 호출되는 라이프 사이클 메소드
    componentDidMount(){
        this.props.navigation.setOptions( {title:'Good!'} );
    }
}