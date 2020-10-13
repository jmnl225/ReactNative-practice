import React, {Component} from 'react';
import {View, Text, button, StyleSheet} from 'react-native';

export default class screen2 extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.Text} >Screen #2</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Text:{
        padding:8,
        fontWeight:'bold'
    }
});