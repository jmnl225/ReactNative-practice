import React, { Component } from 'react';
import { Alert, TextInput } from 'react-native';
import {View, textInput, Button, StyleSheet}

class MainComponent extends Component {

    //Text Component가 보여줄 글씨를 가진 변수
    // 변수값이 변경되었을때 화면갱신ㅇ니 자동으로 되려면 
    //반드시 state라는 변수객체로 만들어야함
    state = {
        msg:"Hello"
    };

    //화면갱신에 영향이 없는 변수
    data="";

    //이 컴포넌트가 화면에 그려내는 작업메소드
    render(){
        return(
            <View style = {styles.root}>
                //<TextInput onChangeText={this.changeText} style= {styles.textInput}></TextInput>
                <TextInput multiline={true} numberOfLines={4} onChangeText={this.change} onSubmitEditing={this.submitText} style= {styles.textInput}></TextInput>
                <Text style= {styles.plainText}></Text>
                
                <View style={ {marginTop: 16} }>
                    <Button onPress title="button"></Button>
                </View>
                
            </View>
        );
    }//render

    change= (value)=>{
        //EditText글씨가 바뀔때 마다 값을 전달받음
        this.data = value;
    }

    clickBtn = () => this.setState( { msg: this.data } );

    //TextInput 글씨 작성 후 완료버튼(Submit)을 클릭했을때 발동
    //파라미터 : 완료 이벤트 객체
    submitText= (submitEvent)=>{
        let value = submitEvent.nativeEvent.text;
        Alert.alert('submit: ' + value);
        this.setState({msg:value});
    }



    //TextInput의 글씨가 변경될때 마다
    //발동하는 메소드
    //파라미터 : TextInput에 써있는 글씨가 파라미터로 전달

    changeText(value)=>{
        //Alert.alert('changed : ' + value);
        //this.state.msg = value;
        //state값을 대입 연산자로 변경하면 자동갱신 안됨
        //반드시 화면갱신을 하고싶다면 setState
        this.setSatat({msg:value});
    }

}//MainComponent class..

//MainComponent클래스를 다른.js문서에서  사용할 수 있다.

//스타일직업
const styles = {
    root:{
        padding: 16,
        flex: 1
    },
    textInput:{
        borderWidth: 2,
        borderColor: 'green',
        backgroundColor: 'white',
        borderRadius: 8
    },
    plainText:{
        marginTop: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 32
    },
    Button


}