import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Second extends Component{
    render(){

        //전달받은 파라미터 데이터를 간결하게 작성하기 위해
        //구조분해할당 문법 사용
        const {name, age} = this.props.route.params;

        return(
            <View style={styles.root}>
                <Text style={styles.text}></Text>
                <Button title="Go Back" onPress={ ()=>{this.props.navigation.goback()} } ></Button>
                <Button title="Go to Top Screen" color="indigo" onPress={ ()=>{this.props.navigation.popToTop()} } ></Button>

                {/* navigate() 할 때 전달된 데이터 객체는 자동으로  */}
                {/* 이 Component의 this.props 안에 route라는 이름의 멤버변수 안에 저장되어 있음 */}

                {/* <Text style={styles.text}> {this.props.route.params.name} , {this.props.route.params.age} </Text> */}
                {/* 구조분해할당!! */}
                <Text style={styles.text}> {name} : {age} </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        padding:8,
        fontWeight:'bold'
    }
});