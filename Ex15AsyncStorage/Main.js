import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class Main extends Component{

    state={
        text:"result",
        //TextInput에 입력된 글씨를 가진 변수
        inputText:''
    }

    render(){
        return(
            <View style={styles.root}>
                <TextInput 
                    value={this.state.inputText}
                    onChangeText={this.changeText}
                    style={styles.textInput}
                    placeholder="Enter Some Text here"
                    ></TextInput>
                <Button onPress={this.saveData} title='save button'></Button>

                <View style={{margin:8}}></View>

                <Button onPress={this.loadData} title='load button' color='orange'></Button>
                <Text style={styles.text}> {this.state.text} </Text>

                <Button onPress={this.getData} title="ES7을 이용한 비동기 처리"></Button>
            </View>
        );
    }

    getData= async()=>{
        //Async Storage에 저장... 그런데 새로운 쓰레드가 저장을 하는동안 다음 일을 처리하게됨.
        // 따라서! 비동기로 다른 작업을 진행중일때, 그 작업이 끝날때까지 기다리게 하도록 await. 그리고 기다리면 실행할 수 있도록, async를 함수 전에 적어줌. 
        const value = await AsyncStorage.getItem('Data');
        if(value != null) this.setState({text:value});
    }

    loadData = ()=>{
        //저장 되어있는 값 읽기 'Data' 식별자로 저장
        //비동기 방식 - 별도 스레드
        //즉, 값을 주세요.. 라는 요청과 별도로 메인스레드 진행됨
        // 비동기처리는 promiss 문법으로 처리. 
        AsyncStorage.getItem('Data').then( (value)=>{this.setState({text:value}) } );
    }

    changeText = (value)=>{
        this.setState({inputText:value});
    }

    saveData= ()=>{
        //AsyncStorage에 저장 (마치 android의 shared preference 같은 역할)
        // Key값, 
        AsyncStorage.setItem('Data', this.state.inputText);
        alert('데이터가 저장되었습니닷!');

        this.setState({inputText:''}); //이건 변수값이 사라지는 것 뿐이지, 보여주는 창에서 사라지는 것이 아님.

    }

}

const styles=StyleSheet.create({
    root:{
        flex:1, padding:16
    },
    textInput:{
        paddingLeft:16, paddingRight:16,
        borderWidth:1,
        borderRadius:8,
        borderColor:'black',
        marginBottom:16
    },
    text:{
        marginTop:16,
        paddingRight:8,
        fontWeight:'bold',
        fontSize:24
    }
});