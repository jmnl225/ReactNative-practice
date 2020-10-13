import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Main extends Component{

    state = {
        msg:"Hello"
    }

    clickBtn= ()=>{
        this.setState({msg:"Nice"});
    }

    render(){
        return(
            <View style={styles.root}>
                {/* 새로운 컴포넌트를 만드는 2가지 방법 */}
                {/* 1. stateful Component : Component 를 상속받아 class 생성 */}
                {/* 2. stateless Component : 마치 함수를 만들듯이 Component 제작 [함수형 컴포넌트] */}

                <AAA onPress={this.clickBtn}></AAA>
                <BBB></BBB>
    

            </View>
        );
    }
}

const BBB = ( {msg} )=>{
    return(
        <View>
            <Text style={styles.text}> {msg} </Text>
        </View>
    );
}

const AAA = (props)=>{
    return (
        <View>
            <Button title='button' onPress={props.onPress}></Button>
        </View>
    );
}


//원래 사용하던 컴포넌트 설계
class MyComponent extends Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>Hello, My Component!</Text>
                <MyComponent kkk="sam">Hello </MyComponent>
                <AAA onPress={ ()=>{this.clickBtn} }></AAA>
            </View>
        );
    }
}

//함수형 컴포넌트
const MyComponent2 = ({title, msg})=>{
    return(
        <View>

            <Text style={styles.text}>Nice My Component2</Text>
            <Text style={styles.tex}></Text>
            <MyComponent kkh="sam">Hello </MyComponent>
            <MyComponent kkh="sam">Hello </MyComponent>

            <MyComponent2 title="sam">Hello </MyComponent2>
            <MyComponent2 title="sam">Hello </MyComponent2>
            <MyComponent2 title="sam">Hello </MyComponent2>


        </View>
    );
}


const styles = StyleSheet.create({
    root:{
        flex:1, padding:16
    },
    text:{
        margin:8, padding:8, fontWeight:'bold', fontSize:20
    }
});