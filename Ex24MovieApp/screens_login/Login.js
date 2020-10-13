import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import InputComponent from '../components/InputComponent';



export default class Login extends Component{
    render(){
        return (

            <View style={styles.root}>
                {/* 1. 로그인 콘텐츠 화면 */}
                <View style={styles.content}>
                    {/* 1.1 로고 */}
                    <Text style={styles.logo}>MOVIE App</Text>

                    {/* 1.2 이메일/패스워드 입력박스 */}
                    <InputComponent secureTextEntry={false} placeholder="이메일" ></InputComponent>
                    <InputComponent secureTextEntry={true} placeholder="비밀번호"></InputComponent>

                    {/* 1.3 비밀번호 재설정: Text 컴포넌트 onPress */}
                    <Text onPress={()=>this.props.navigation.navigate('ResetPassword')}
                    style={styles.resetPW}>비밀번호 재설정</Text>

                    {/* 1.4 로그인버튼 */}
                    <View style={{width:'100%', amrginBottom:24}}>
                        <Button title="로그인" color="#575757"></Button>
                    </View>
                    
                    {/* 1.5 회원가입 */}
                    <Text style={styles.signup}>
                        계정이 없으신가요? <Text styles={styles.signupLink} 
                        onPress={()=>this.props.navigation.navigate('SignUp')}>가입하기</Text>
                    </Text>

                </View>

                {/* 2. Footer영역 */}
                <View style={styles.footer}>
                    <Text style={styles.footerCopyright}>MovieApp by mrhi</Text>
                </View>

            </View>

        );
    }


    //로그인 버튼 클릭시
    login = async ()=>{
        // Async 스토리지지
        //원래는 서버에 전송하는 코드 사용해야하지만 시간상 생략
        //AsyncStorage에 가상의 이메일값으로 로그인 유무만 저장

        await AsyncStorage.setItem('email', 'android@mrhi.com');

        //로그인이 되었으니 앱의 메인화면인 Movie List 화면을 가진 drawNav로 이동
        this.props.navigation.navigate('MainDrawerNav');
    }

}
  
const styles = StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
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
        marginBottom:32
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
        borderTopColor:'#D3D3D3',
        padding:8,
    },
    footerCopyright:{
        color:'#929292',
        textAlign:'center'
    }
    
});