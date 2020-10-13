import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Alert} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        this.state={
            Text: "",
            movies: [],
        };
    }


    render(){
        return(
            <View style={ styles.root }>                
                <Button title="fetch data from network" onPress={ this.fetchData }></Button>

                {/* 네트워크로 읽어온 데이터를 출력하기위한 Text컴포넌트 - 데이터가 갱신되어야 하므로 this.state멤버 사용 */}
                {/* 데이터의 길이가 길 수 있으므로 ScrollView : ScrollView의 height은 기본적으로 flex:1 이어서 안의 내용물과 상관없이 화면의 남은 공간을 다 차지함  : wrap으로 하고 싶다면 View로 감싸야함*/}
                <View>
                    <ScrollView style={ {marginTop:16, backgroundColor:'gray'} } >
                        <Text style={ {padding:8, color:'white'} }> {this.state.text} </Text>
                    </ScrollView>
                </View> 

            </View> 

        );

    }//render method..

    //네트워크 작업 메소드

    fetchData = ()=>{

        console.log('fetch...');
        //1. JavaScript의 XMLHttpRequest객체 사용하기
        let request = new XMLHttpRequest();

        request.onreadystatechange = ()=>{
            if(request.readyState == 4 && request.status ==200 ){
                //alert(request.responseText);
                //Text 컴포넌트가 보여주는 
                this.setState({text:request.responseText});
            }
        };

        // 실습할때 서버 파일주소는 Dothome이나 Github에 업로드한 파일로 테스트

        // 2. fetch()함수 : Jquery의 ajax()와 같은 역할을 하는 함수 [React프레임워크에 기본적으로 포함되어 있음.]
        // fetch는 html도 됨.. 단, reject되는 경우가 많음. '경고표시!'

        // promiss 문법 : 비동기처리시에 처리가 끝났을 때 해야하는 작업을 할 때 유용.
        // .then() 메소드 : 비동기 처리가 끝나면 자동으로 파라미터로 전달된 함수를 실행하도록 약속한 개념
        // [위 XMLHttpRequest의 onreadystatechage와 비슷] - 작성위치나 식별성 결과객체등을 제어하는 것이 수월하여
        // promiss가 더 선호됨.

        //fetch('http://mrhi2018.dothome.co.kr/index.js').then( ( response )=>{ alert( response.status  ) }  ); // 경고창 결과 : 200 이면 OK

        
        //2.1 fetch()의 결과 문자열을 받으려면.
        fetch('http://jmnl.dothome.co.kr/index.js')
        .then((response)=>{
            //응답 response객체로부터 결과물을 text 문자열로 변환해달라는 작업요청 [비동기식 처리]하고 결과를 리턴해주면
            //다음 .then()에서 실행하도록 약속[promiss]하여 콜백함수 실행
            return response.text();
        })
        .then((responseText)=>{
            //파라미터 : 위에서 response.text()로 변환된 결과 문자열데이터
            //변환된 string 응답을 Text컴포넌트에 출력하기 위해 this.state.text값 변경 
            this.setState({text:responseText});
        });

        //2.2 promiss.then()를 통해 비동기식 처리를 하던 중 에러가 발생하면??
        //이를 캐치하고자 할 때 .catch()메소드 사용
        .then() 작업 중 문법에러! 
        fetch('http://mrhi2018.dothome.co.kr/index.js')
        .then((response)=>{

            // .then() 작업 중 문법에러는 .catch()로 빠짐. 즉, .then()은 자동 try 예외처리.
            
        // 응답 response객체로부터 결과물을 text 문자열로 변환해달라는 작업요청 [비동식처리]
        //하고 결과를 리턴해주면 다음 .then()에서 실행하도록 약속[promiss]하여 콜백함수 실행

        return response.text();
            
        })
        .then((responseText)=>{
            //파라미터: 위에서 response.text()로 변환된 결과 문자열 데이터
            //변환된 string 응답을 Text 컴포넌트에 출력하기 위해 this.state.text값 변경
            //this.setState({text:responseText});
        })
        .catch((error)=>{// .then()작업 중 에러가 발생하면 .catch()의 콜백함수가 호출됨.
        //alert(error);
    // });
 
    }


}