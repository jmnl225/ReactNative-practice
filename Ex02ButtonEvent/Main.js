import React, {Component} from 'react';
import {View, Button, StyleSheet, Alert, Text, Image} from 'react-native';

class Main extends Component{
    render(){
        return(
            // 1) 기본적인 버튼 클릭이벤트 반응하기
            // 스타일이 없으면 배치가 이상하니 스타일링 적용 
            // onclick 속성은 없음.
            // 버튼에 onClick속성 사용하듯이 onPress속성을 통해 실행할 함수객체를 지정, 이벤트 반응
            // 실행할 함수를 전역함수로 만들어보기 -> Main클래스 밖에 정의.
            // <View style={style.root} >
                {/* 버튼에 들어가는 글씨는 반드시 title속성을 이용해야함. text node로 넣을 수 없음:error! */}

                // <Button title="button" onPress={ clickBtnFunction } ></Button>
// 
//                 이렇게 {}안에 함수객체명이 아니라 함수호출문 ()을 쓰면 onPress 상황과
//                 상관없이 함수가 실행됨: 이벤트 객체를 등록하는 것이 아님!!!
//                 <Button title="button" onPress={clickBtnFunction()} ></Button>

//                 화살표함수 끝나고 전역함수를 별도로 만들지 않고 바로 익명함수객체로 삽입.

//                 <Button title="button" onPress={ function(){Alert.alert('Clicked!')} } ></Button>

//                 화살표함수 표기법으로 변경하면..
//                 <Button title="button" onPress={ ()=>{Alert.alert('clicked!')} } ></Button> 
// 

            // </View>

            // 앞으로의 앱코딩 과정에선 1처럼 전역함수를 키워드로 사용하는 건 지양. 
            // 왜? 함수명 관리및 구분의 어려움 & 메모리 효율성
            // <View style={style.root}>
            //     {/* 주의!! 멤버 메소드는 반드시 this. 키워드를 사용해야함. */}
            //     <Button title="button" onPress={this.clickBtn} ></Button>

            // </View>

            // 3) 버튼 클릭하여 Text 컴포넌트 값 변경해보기
            // 방법이 기존과 다름. - 컴포넌트 객체를 참조하는 것이 아닌 binding방식으로 데이터를 보여줌
            // <View style={style.root}>

            //     <Button title="button" onPress={this.changeTextByclickBtn} ></Button>
            //     {/* Text 컴포넌트가 보여줄 내용물이 고정된 글씨가 아니라 바뀌게 되는 값이여서
            //     변수로 글씨 설정: 우선 전역변수로 저 아래에.. */}
            //     <Text style={style.plainText} > {text} </Text>

            // </View>


            // 4) 전역변수 말고 멤버변수 사용
            // <View style={style.root} >
            //     <Button title = " button " onPress={this.changeMemberTextByclickBtn}></Button>

            //     {/* 해결방법 1. bind() 메소드 이용하기 */}
            //     {/* 이렇게 매개변수로 MainComponent의 this를 전달하면 그 메소드 안에서는 
            //     this를 MainComponent의 this로 인식 */}
            //     <Button title="button" onPress={this.changeMemberTextByclickBtn.bind(this)} ></Button>

            //     {/* 해결방법 2. 화살표함수 이용 */}
            //     {/* 위처럼 함수객체를 만들어서 객체명으로 주지 말고 화살표함수로 만들어주면  this 문제 해결 */}
            //     <Button title="button" onPress={this.changeMemberTextByclickBtnViaArrow} ></Button>

            //     {/* 멤버변수로 값 설정 : 저 위에 contructor(생성자)를 통해 */}
            //     <Text style={style.plainText} > {this.text} </Text>

            // </View>

            5) 하지만 결국 Text의 글씨 변경은 되지 않음
            state !!!!!!!!!!!!
            state ? 이 컴포넌트의 상태(state) 값을 가지고 있는 멤버 객체.
            state의 값이 변경되면 자동 this.render()함수가 재실행되어 화면갱신이 가능!

            <View style={style.root} >
                <Button title="button" onPress= {this.changeTextByState.bind(this)}></Button>
                {/* Text컴포넌트가 보여줄 값을 state객체를 이용하여 설정 */}
                <Text style={style.plainText} > {this.state.text} </Text>
            </View>
                
            
        );
    }//render

}//Main

//1. 실습에서 사용할 전역함수

function clickBtnFunction(){
    //경고창 보이기
    Alert.alert('PRESSED BUTTON!');
}

//1.1) 자바 스크립트에서는 함수도 객체이므로 아래처럼 객체 참조하듯이 변수에 넣을 수 있음.
// function이라는 글씨를 지우고 ()와 {} 사이에 => 사용
// 파라미터가 한개라면 ()도 생략가능
// let clickBtnFunction = () => {
//     Alert.alert('Pressed Button!')
// }

// 위처럼 함수의 실행문이 짧고 간결하다면
// jsx에서 onPress = {} 안에 곧바로 함수정의문을 삽입하여 사용할수도 있음

// 3) 실습에서 사용할 전역변수
let text= " Hello ";

//스타일 객체
const style = StyleSheet.create({
    root:{
        backgroundColor:'lightgreen',
        flex:1,
        padding:16
    },

    //2) 실습에 사용할 스타일
    plainText:{
        marginTop: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom:24
    },

     //6) 실습에 사용할 스타일
     img:{
         marginTop:8,
         flex:1,
         width:null,
         resizedMode:'cover'
     }

});

export default Main;