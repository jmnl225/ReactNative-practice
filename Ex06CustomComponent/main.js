import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import MyCom from './MyCom';
import MyCom2 from './MyCom2';

export default class Main extends Component{

    state={
        msg:"Message"
    }

    render(){
        return (
            <View style={styles.root}>

                <MyCom2 msg={this.state.msg}></MyCom2>

                {/* <Text style={styles.text}> {this.state.msg} </Text> */}

                <MyCom aaa={ this.clickBtn1 } title="btn1" color="indigo"></MyCom>
                <MyCom aaa={this.clickBtn2} title="btn2" color="red"></MyCom>
                <MyCom aaa={this.clickBtn3} title="btn3" color="orange"></MyCom>

                {/* <MyComponent aaa="Sam"></MyComponent>
                <MyComponent aaa="Robin"></MyComponent>
                <MyComponent aaa="park"></MyComponent> */}

            </View>

        );
    }//render method..

    clickBtn1 = () => {
        // Alert.alert('clicked #1');
        this.setState({msg:"Hello"});
    }

    clickBtn2 = () =>{
        // Alert.alert('clicked #2');
        this.setState({msg:"Nice"});
    }

    clickBtn3 = () =>{
        // Alert.alert('clicked #3');
        this.setState({msg:"Good"});
    }

}//Main Component class

//나만의 커스텀 컴포넌트
class MyComponent extends Component{

    state= {
        msg:"aaa"
        
        // state는 내가 만드는 것, poroperties는 있는것을 ㅏ주어짐
    }

    render(){
        return (
            <View style={ {margin:16} }>
                <Text>Hello Sam!</Text>
                <Button title="click me"></Button>

                {/* 나만의 컴포넌트 */}

            </View>
        );
    }
}//myComponent

//스타일객체들 적용
const styles= StyleSheet.create({
    root:{
        backgroundColor:'#BBBBBB',
        flex:1,
        padding:16
    },
    text:{
        fontSize:26,
        fontWeight:'bold',
        alignSelf:'center'        
    }
});