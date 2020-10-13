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
            <View style={styles.root}>
                <Button title='fetch data from network' onPress={ this.fetchData } ></Button>

                {/* 네트워크로 읽어온 데이터를 출력하기 위한 Text 컴포넌트 - 데이터가 갱신되어야 하므로 this.state멤버 사용 */}
                {/* 데이터의 길이가 길 수 있으므로 ScrollView: ScrollView의 height은 기본적으로 flex:1  */}
                {/* 따라서 안의 내용물과 상관없이 화면의 남은 공간을 다 차지함. : wrap으로 하려면? 상위태그 <View>로 감싸줘야함 */}

                <View>

                    <ScrollView style={styles.scroll}>
                        <Text style={styles.Text} > {this.state.Text} </Text>
                        
                        {/* 영화정보를가진 배열 데이터 출력: 원래는 FlatList라는 컴포넌트 사용 */}
                        {
                            this.state.movies.map( (element, index, array)=>{
                                return (
                                    <View key={element.id} style={{flexDirection:'row', margin:6, borderWidth:1}} >
                                        <Text>{element.id}</Text>
                                        <Text>{ element.title}</Text>
                                        <Text>{ element.releaseYear} </Text>
                                    </View>
                                );
                            } )
                        }
                        <Text></Text>
                    </ScrollView>

                </View>


            </View>
        );
    }

    fetchData= () =>{

        // //1. javaScript의 XMLGttpRequest 객체 사용하기
        // let xhr = new XMLHttpRequest();

        // xhr.onreadystatechange = ()=>{
        //     if(xhr.readyState==4 && xhr.status==200 ){
        //         this.setState( {text:xhr.responseText} );
        //     }
        // }

        // //xhr.open('GET','https://www.naver.com',true);
        // //xhr.open('GET','https://raw.githubusercontent.com/2017mrhi/RN/master/aaa.txt',true);

        // xhr.send();

        // 2. Fetch 라이브러리 - JS의 기본 통신 라이브러리
        // fetch()함수 : Jquery ajax()와 같은 역할
        // fetch('https://raw.githubusercontent.com/2017mrhi/RN/master/aaa.txt')
        // .then((response)=>{
        //     // Alert.alert(response.status+"")
        //     //response객체가 받은 데이터를 그냥 글씨 문자열로 변환시키도록 요구
        //     return response.text(); //결과를 텍스트로 변환시킴. 하지만!! 이 처리도 비동기방식. (콜백메소드 사용)
        // }).then(responssetTEdt
            
        // (responseText)_=>{
        //     this.setState({text:response, })
        // })
        // //자동으로 get. 
        // //promiss : 비동기 작업을 뒤이어 할 수 있는 문법 .then();

        // fetch('https://raw.githubusercontent.com/2017mrhi/RN/master/aaa.txt')
        //         .setState({text;responseText})
        //         .catch(error=>alert(arror));
        // //주소 
        // https://raw.githubusercontent.com/2017mrhi/RN/master/aaa.txt


        //3. Json 파싱 [open api 사용]
        // const url='https://reactnative.dev/movies.json';
        // fetch(url)
        // .then((res)=>{
        //     //return res.text();
        //     return res.jason(); //내려받은 데이터 json문자열 -> 객체로 변환
        // })
        // .then((jasonObj)=>{
        //     //this.setState({text:resText})
        //     //let jsonObj = JSON.parse(resText);
        //     this.setState({text:jsonObj.title}, {movies:jsonObj.movies})
        // });

        //4. GET Method로 게이터 보내고 응답(echo)받기
        // 보낼 데이터
        // let name = "sam";
        // let msg = "Hello World!";

        // //GET은 특별한 것이 없음. 왜? URL 뒤에 보낼데이터 붙이면 끝
        // //const url = ''+name+"&"+'msg='+msg;

        // const url = `http://.php?name=${name}&msg=${msg}`;

        // fetch(url).then(res=>res.text()).then(resText=>this.setState({text:resText}));


        //POST방식
        
        // let data = "name="+name+"&"+"msg="+MSGesture;
        // const url= ''
        // fetch(url,{
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/x-www-form-urlencoded'
        //     },
        //     body:data
        // })
        // .then(res=>res.text().then(resText=>this.setState({text:resText}))

        

        //JSON방식으로 서버에 데이터 전달하기
        //보낼 데이터가 변수로 있는 경우보다는 객체로 있는 경우가 많음
        // let dataObj = {
        //     name:"sam",
        //     msg:"Hello world",
        //     age:20
        // }

        // //const data = "name="+ dataObj.name+"&"+ 너무 복잡해짐!!
        // //-> json 문자열로 변환.
        // const jsonData = JSON.stringify(dataObj); //객체 -> json문자열

        // //alert(jsonData);
        
        // const url='/jsonRequest.php';
        // fetch(url, {
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body: jsonData
        // })
        // .then(res=>{
        //     return res.text();
        // })
        // .then(resText=>{
        //     this.setState({text:resText});
        // })

    }

}

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },
    scroll:{
        marginTop:16,
        backgroundColor:'gray'
    },
    Text:{
        padding:8,
        color:'white'
    }
});