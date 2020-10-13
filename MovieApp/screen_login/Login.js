import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputComponent from '../components/InputComponent';

import AsyncStorage from '@react-native-community/async-storage';


export default class Login extends Component{
    render(){
        return(
            <View style={styles.root}>

               <View style={styles.content}> 
                    {/* 1.1 로고 */}
                    <Text style={styles.content}>MOVIE App</Text>

                    {/* 1.2 이메일/패스워드 입력박스 */}
                    <InputComponent secureTextEntry={false} placeholder="이메일" ></InputComponent>
                    <InputComponent secureTextEntry={true} placeholder="비밀번호" ></InputComponent>

                    {/* 1.3 비밀번호 재설정: Text Component - onPress */}
                    <Text style={styles.resetPW} onPress={ ()=> this.props.navigation.navigate('ResetPW') } >비밀번호 재설정</Text>
                        

                    {/* 1.4 Login Button */}
                    <View style={{width:'100%', marginBottom:24}}>
                        <Button title="로그인" color="#3796EF" onPress={this.login} ></Button>
                    </View>

                    {/* 1.5 SignUp */}
                    <View>
                        계정이 없으신가요? <Text style={styles.singupLink} onPress={()=>this.props.navigate('SignUp') } >가입하기</Text>
                    </View>

               </View>

               {/* 2. footer영역 */}
               <View style={styles.footer}>
                   <Text style={styles.footerCopyright}>MovieApp by mrhi</Text>
               </View>

            </View>
        );
    }

    //로그인 버튼클릭시
    login = async ()=>{
        //원래는 서버에 전송하는 코드가 필요하지만..
        // AsyncStorage에 가상의 이메일값으로 로그인 유무만 저장하기
        await AsyncStorage.setItem('email', 'android@mrhi.com');

        //로그인이 되었으니 앱의 메인화면인 Movie List 화면을 가진 drawNav로 이동
        this.props.navigation.replace('MainDrawerNav');
        
    }

}


const styles= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,  //footer제외 모든 공간 사용
        justifyContent:'center',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding: 8,
    },
    footerCopyright:{
        color: '#929292',
        textAlign:'center',
    },
    logo:{
        color: '#292929',
        fontSize:40,
        fontWeight:'bold',
        textAlign:"center",
        marginBottom: 32,
    },
    resetPW:{
        width: '100%',
        color:'#3796EF',
        textAlign:'right',
        marginTop: 8,
        marginBottom: 16,
        marginRight:8,
    },
    btn:{
        width:'100%',
        height:40,
        
    },
    signup:{
        color:'#929292',
        textAlign:'center',
    },
    singupLink:{
        color:'#3797EF',
    }
    
});