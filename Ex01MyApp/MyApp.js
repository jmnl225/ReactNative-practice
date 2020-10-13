//리액트 라이브러리 사용 / 그 중에서 Component클래스 사용
import React, {Component} from 'react';
//import { Component } from 'react';
//리액트 네이티브 라이브러리의 클래스 import 
import {Text, Button, View, StyleSheet, Image} from 'react-native';

//리액트 네이티브는 Component를 상속받은 
//클래스들만 화면에 보여질 수 있음
class MyApp extends Component{
    //이 컴포넌트가 보여줄 뷰를 그려내는 메소드
    //한번에 하나의 Component만 리턴할 수 있음
    //여러개를 보여주고 싶다면 ViewGroup 역할이 필요함 (Layout 같음. / Web의 div)

    render(){

        //지역변수
        let name = "SAM";
        let btnTitle = "Click Me";

        //XML문법 안에서 JS문법 사용가능함
        //XML안에 {}를 사용하면 JS문법 사용가능
        //단, {} 안에는 변수나 상수, 값 또는 함수만 놓여질 수 있음
        //스타일 적용 : css 인라인 적용과 흡사함!!
        // 스타일을 JS의 객체로 만들어서 지정해줌

        return (
            <View style={ styles.root}>
                <Text style={styles.text}> Hello {name} </Text>
                <Text style={plainTextStyle}> Nice to meet you</Text>
               
                <View style={{marginTop:20}}>
                  <Button title={btnTitle}></Button>
                </View>

                <Image source={ require('./moana01.jpg') }></Image>

                
            </View>
        );
    }

}

//전역의 위치에 스타일 객체들
let textStyle = {
    color: 'blue',
    fontSize: 20, //기본단위 dp
    fontWeight: 'bold',
    margin: 10
};

//전체 View의 스타일
const rootView = {
     backgroundColor: '#AAFFCC',
     //height: '100%'
     //RN은 기본적으로 css 중 flex 스타일이 적용되어 있음
     //이미 display: flex는 되어있는 상태. 
     flex: 1, //1할을 차지하도록 설정 -> Linear Layout Weight 과 같음.
     padding: 16
};

const plainTextStyle = {
    margin: 8,
    color: '#333333'
};


//버튼은 스타일이 안됨
const btnStyle = {
    margin: 80
};


//스타일이 위처럼 개별 변수로 존재하면 가독성이 나쁨
//스타일을 몰아서 한번에
const styles= StyleSheet.create({
    root:{
        backgroundColor:'#AAFFCC',
        flex:1,
        padding:16
    },
    text:{
        color:'blue',
        fontSize: 15,
        margin : 16
    }
});



//위에서 설계한 MyApp 클래스를
//index.js에서 첫번째로 실행할 컴포넌트로 설정하기 위해 추출
export default MyApp;
