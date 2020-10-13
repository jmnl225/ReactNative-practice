import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';

class MainComponent extends Component{

    //멤버변수
    msg = "Hello world";

    //리액트의 독특한 멤버변수
    state 

    render(){
        return (
            <View style={ styles.root }>
                {/* 버튼의 클릭함수는 전역함수를 권장하지 않음*/}

            </View>
        );

    }//render method...

    jjj = ( => {
        this.setState ( {text: "BAD!!"} );
    })

    //멤버함수 - 메소드
    //function show(){} //ERROR

    show(){
        //Alert.alert('clicked');
        // Text 컴포넌트가 보여주는 글씨 변경
        // 기존 기법과 완전 다름!
        // 반드시 변경은 setState() 메소드를 해용해야함!
        
        //this.state() 메소드를 이용해야만 함
        this.setState({data:"Nice!!"});

        //글씨를 가진 컴포넌트를 제어하는 것이 아니라 
        // 그 컴포넌트가 보여주는 내용물을 가진 변수값을 변경하는 방식!
        //this.msg = "Good Afternoon!"; // ERROR

        // 이 버튼 클릭시 발동하는 함수를 선언적 함수로 만들면
        //그 함수 안에서 this.키워드 

    }

   

}//Main Component class...


//가급적 버튼 이벤트 함수들은
//버튼을 가진 class 안에서 처리하는 것을 권장



//전역함수
function clickBtn(){
    Alert.alert('clicked button');
}

let clickBtn2= function(){
    Alert.alert('clicked!');
}

let clickBtn3= ()=>{
    Alert.alert('화살표 함수 클릭');
}


//스타일시트 객체 생성
const styles= StyleSheet.create({
    root:{
         padding: 16,
         flex: 1
    },
    text:{
        marginTop: 8,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10
    }
});

//다른 문서인 index.js 에서 이 MainComponent를 인식할 수 있도록
export default MainComponent; 

