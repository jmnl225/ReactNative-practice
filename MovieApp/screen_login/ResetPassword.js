import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class ResetPassword extends Component{
    //탭에 따른 화면 구성을 위해 탭들을 배열로 state에 저장

    constructor(){
        super();
        this.state={
            tabs:["이메일", "전화번호"],
            tabIndex: 0,
            //탭 선택에 따른 안내메세지
            message:[
                "이메일을 입력하시면 임시 비밀번호를 보내드립니다.",
                "전화번호를 입력하시면 임시 비밀번호를 보내드립니다.",
            ],
        };
    }

    //3. 탭 선택에 따른 tabIndex변경 메소드
    setTabIndex = (index)=> {
    this.StyleSheet({tabIndex:index})
    }

    render(){
        return(
            <View style={styles.root}>
                <View style={styles.content}>

                    <View style={styles.lockImageContainer}>
                        <Image source={require('../images/lock.png')} ></Image>
                    </View>

                    {/* 타이틀 글씨 */}
                    <Text style={styles.title}>로그인에 문제가 있나요?</Text>
                    {/* 탭선택에 따른 안내문구 */}
                    <Text style={styles.message}> {this.state.message[ this.state.tabIndex ]} </Text>

                    <View style={styles.tabContainer}>
                        {
                            this.state.tabs.map(
                                (value, index) => {
                                    //tabs 배열의 항목값을 Label로 전달하고 현재 선택된 탭번호 (state.tabIndex)가 현재 탭번호와 같은지
                                    //비교연산 결과 전달 (전달값: boolean결과) 및 선택된 index번호의 탭을 현재선택탭 값으로 변경하는 메소드 전달
                                    return <TabComponent label={value} selected={this.state.tabIndex === index} 
                                    onPress ={ ()=>this.setTabIndex(index)} key={"Tab"+index}  ></TabComponent>
                                }
                            )
                        }
                    </View>

                    {/* 정보입력 - 미리 만들어놓았던 components / InputComponent.js 이용 : 현재 탭의 라벨값으로 힌트제공 */}
                    <InputComponent placeholder={ this.state.tabs[this.state.tabIndex] } ></InputComponent>

                    {/* 다음 버튼 */}
                    <View style={{width:'100%', margin:16}}>
                        <Button title="다음" onPress={ ()=>{Alert.alert('임시비밀번호가 발송되었습니다.', '로그인 후 정보수정을 통해 안전한 비밀번호로 변경해 주시기 바랍니다.')} } ></Button>
                    </View>

                </View>

                <View style={styles.footer}>
                    <Text style={styles.goBack} onPress={ ()=>this.props.navigation.goBack() }>로그인 화면으로 돌아가기</Text>
                </View>

            </View>
        );
    }

    // Header영역이 필요 없으면 제거!
    static navigationOptions={
        headerShown: false,
    }
    


}// ResetPassword Com




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
    goBack:{
        color: '#3796EF',
        textAlign:'center',
    },
    lockImageContainer:{
        padding:24,
        borderWidth:2,
        borderColor:'#292929',
        borderRadius: 100,  //코너반지름의 값으로 원이 될 전도의 값 이상을 주면 무조건 원이 됨. 즉, 200을 써도 똑같이 원이 됨. 60은 좀 작아서 라운드 사각형이 됨
        margin:16,
    },
    title:{
        fontSize:16,
        marginBottom:16,
    },
    message:{
        textAlign:'center',
        marginBottom:16,
        color:'#292929',
    },    
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    },
});