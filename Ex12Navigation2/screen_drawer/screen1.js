import React, {Component} from 'react';
import {View, Text, button, StyleSheet, Button} from 'react-native';

export default class screen1 extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.Text} >Screen #1</Text>

                <Button title="open drawer" onPress={()=>this.props.navigation.openDrawer}></Button>
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