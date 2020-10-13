import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import InputComponent from '../components/InputComponent';

import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.root}>

                {/* 1. 로그인 콘텐츠화면 */}
                <View style={styles.constent}>

                    {/* 1.1 로고 */}
                    <Text style={styles.logo}></Text>

                    {/* 1.2 이메일/패스워드 입력박스 */}
                    <InputComponent secureTextEntry={false} placeholder="이메일" ></InputComponent>
                    <InputComponent secureTextEntry={true} placeholder="비밀번호" ></InputComponent>

                    {/* 1.3 비밀번호 재설정 */}
                    <Text onPress={()=>this.props.navigation.navigate('ResetPassword')} 
                          style={styles.resetPW}>비밀번호 재설정</Text>

                    {/* 1.4 로그인버튼 */}
                    <View style={{width:'100%', marginBottom:24}}>
                        <Button onPress={this.Login} title="로그인" color="#3796FE" ></Button>
                    </View>

                    {/* 1.5 회원가입 */}
                    <Text>
                        계정이 없으신가요? <Text onPress={()=>this.props.navigation.navigate('SignUp')}
                            style={styles.signupLink} > 가입하기 </Text>
                    </Text>

                </View>

                {/* 2. Footer영역 */}
                <View style={styles.footer}>
                    <Text style={styles.footerCopyright} > MovieApp by mrhi </Text>
                </View>

            </View>
        );
    }

    //로그인 버튼 클릭시 실행되는 메소드
    login = async ()=>{
        //AsyncStorage에 영구저장
        await AsyncStorage.setItem('email', 'android@mrhi.com');

        //로그인이 되었으니 메인화면인 MovieList를 가진 drawerNav로 이동
        this.props.navigation.replace('MainDrawerNav')
    }

}


const styles=StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    constent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:32
    },
    logo:{
        color:'#292929',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:32,
        fontFamily:'serif'
    },
    resetPW:{
        width:'100%',
        textAlign:'right',
        color:'#3796FE',
        marginRight:8,
        marginTop:8,
        marginBottom:16
    },
    signup:{
        color:'#929292',
        textAlign:'center'
    },
    signupLink:{
        color:'#3769FE'
    },
    footer:{
        borderTopWidth:1,
        borderEndColor:'#D3D3D3',
        padding:8
    },
    footerCopyright:{
        color:'#929292',
        textAlign:'center'
    }
});