import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import screen1 from './screen_drawer/screen1';
import screen2 from './screen_drawer/screen2';
import screen3 from './screen_drawer/screen3';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();

export default class MainDrawer extends Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator
                    drawerPosition='left'
                    hideStatusBar={false}
                    drawerType='slide'
                    drawerStyle={{
                        backgroundColor:'white',
                        width:'40%'
                    }}
                    drawerContentOptions={{
                        activeTintColor:'red',
                        itemStyle:{
                            marginVertical:4
                        }
                    }}
                    openByDefault={false}>

                    <Drawer.Screen name='one' component={screen1}></Drawer.Screen>

                    <Drawer.Screen 
                        name='two' 
                        component={screen2}
                        options={{
                            drawerLabel:'두번째',
                            drawerIcon:(obj) => {return <Image style={{width:obj.size, height:obj.size}}
                            source={require('./icons/RN_logo.png')}></Image>}
                        }}
                        ></Drawer.Screen>

                    <Drawer.Screen 
                        name='three' 
                        component={screen3}
                        options={{
                            drawerIcon: ({foucused, color, size})=><Image style={{width:size, height:size}} 
                            source={ require('./icons/RN_logo.png')}></Image>
                        }}
                        ></Drawer.Screen>

                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}