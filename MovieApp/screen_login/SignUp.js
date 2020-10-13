import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class SignUp extends Component{
    //1. 탭 작업시에 탭이 여러개일 수 있고 탭에따라 보여지는 내용이 다르므로
    // -> 탭을 배열로 만들어서 index 번호로 어느 탭인지 구별
    // 하지만!! 탭 선택에 따라 화면 갱신 필요. 따라서 state

    constructor(){
        super();
        this.state={
            tabs:["전화번호", "이메일"],
            tabIndex: 0, //현재 선택된 탭번호
        }
    }

    // 탭 선택에 따라 tabIndex번호를 변경하는 메소드
    setTabIndex= (index)=>{
        this.setState({tabIndex:index});
    }


    //회원가입 화면 구성
    render(){
        return(
            <View style={styles.root}>
                {/* 본문과 footer영역 2개로 구성 */}
                {/* 1.1 본문영역 */}


                <View style={styles.content}>

                    <View style={styles.tabContainer}>
                        {
                            this.state.tabs.map(
                                (value, index)=>{
                                    //tabs 배열의 항목값을 Label로 전달하고 현재 선택된 탭번호가
                                    // 현재의 탭번호와 같은지 비교연산, 결과 전달, 
                                    // + 선택된 index번호의 탭을 현재 선택된 탭 값으로 변경하는 메소드 보내기
                                    return <TabComponent label={value} selected={ this.state.tabIndex===index } key={"Tab" + index} ></TabComponent>
                                }
                            )
                        }
                    </View>

                        {/* 만들어둔 화면 components/InputComponent 사용 - 현재 탭의 라벨값으로 힌트 제공 */}
                    <InputComponent placeholder={ this.state.tabs[this.state.tabIndex]} ></InputComponent>
                    {
                        //이메일 입력 화면일때 패스워드 입력 컴포넌트도 존재하도록 추가.
                        // '&&' 연산자를 통해 앞의 조건이  true 일때 다음 &&코드가 실행되도록
                        this.state.tabIndex === 1 && <InputComponent placeholder="비밀번호" secureTextEntry={true}></InputComponent>
                    }

                    {/* 전화번호 탭일때 다음버튼 */}
                    {
                        this.state.tabIndex === 0 && <View style={{width:'100%', margin:16}}><Button title="다음" onPress={()=>{this.setTabIndex(1)}}></Button></View>

                    }

                    {/* 이메일 탭일때 완료버튼 */}
                    {
                        this.state.tabIndex === 1 && <View style={{width:'100%', margin:16}}><Button title="완료" onPress={()=>{this.props.navigation.goBack()}}></Button></View>
                    }

                    {/* 전화번호 탭 선택시, 전화번호 입력이 필요한 이유를 설명하는 글  */}
                    {
                        this.state.tabIndex === 0 && <Text style={styles.telMessage}>Movie App의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신 거부가 가능합니다.</Text>
                    }
                    
                </View>

                {/* Footer영역 : 로그인 화면으로 되돌아가는 버튼 */}
                <View>
                    <Text>
                        이미 계정이 있으신가요? <Text style={styles.goBack} onPress={ ()=>this.props.navigation.goBack()}>로그인</Text>
                    </Text>
                </View>

            </View>
        );
    }

    // Header영역이 필요 없으면 제거
    static navigationOptions ={
        headerShown: false,
    }

}



const styles= StyleSheet.create({
    //footer 까지는  Login.js의 스타일 그대로 복사해서 사용
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,  //footer제외 모든 공간 사용
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding: 8,
    },
    /////
    footerMsg:{
        color: '#929292',
        textAlign:'center',        
    },
    goBack:{
        color: '#3796EF',
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    },
    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:'#929292',
        marginLeft:8,
        marginRight:8,
    },
});