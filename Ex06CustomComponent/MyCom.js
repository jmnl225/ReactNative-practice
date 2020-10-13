import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';

export default class MyConponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Button onPress={ this.props.aaa } title={this.props.title} color={this.props.color}></Button>
            </View>
        );
    }

}

const styles= StyleSheet.create({
    container:{
        margin:16
    }
})