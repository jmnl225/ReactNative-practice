import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import InputComponent from '../components/InputComponent';
import TabComponent from '../components/TabComponent';

export default class ResetPassword extends Component{

    state = {
        tabs:["이메일", "전화번호"],
        tabIndex:0,
        message:[
            "이메일을 입력하면 임시 비밀번호를 보내드립니다.",
            "전화번호를 입력하면 임시 비밀번호를 보내드립니다."
        ]
    }


    render(){
        return(
            <View style={styles.root}>
                {/* 1. 콘텐츠 영역 */}
                <View style={styles.content}>
                    {/* 1. 자물쇠 이미지 표시 영역 */}
                    <View style={styles.lockImageContainer}>
                        <Image source={'../images/lock.png'}></Image>
                    </View>

                    {/* 2. title 글씨 */}
                    <Text style={styles.title}>로그인에 문제가 있나요?</Text>

                    {/* 3. 탭 선택에 따른 메세지 보여주기 */}
                    <Text style={styles.message}> {this.state.message[this.state.tabIndex]} </Text>    
                    
                    {/* 4. 탭 버튼 */}
                    <View style={styles.tabContainer}>
                        {
                            this.state.tabs.map( (value, index)=>{
                                return <TabComponent TabComponent onPress={()=>this.setTabIndex(index)} selected={ this.state.tabIndex === index } label={value} key={"Tab"+index}></TabComponent>
                            } )
                        }
                    </View>

                    {/* 5. 정보 입력창 */}
                    <Text></Text>



                </View>


            </View>
        );
    }

    //탭 선택시 발동하는 메소드
    setTabIndex = (index)=> this.setState({tabIndex:index});


}

const styles = StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1, width:'100%', alignItems:'center', padding:32
    },
    footer:{
        borderTopWidth:1, borderColor:'#575757', padding: 8
    },
    goBack:{
        color:'#3796EF', textAlign:'center'
    },
    lockImageContainer:{
        padding:24, borderWidth:2, borderColor:'#575757', borderRadius:100, margin:16
    },
    title:{
        fontSize:16, marginBottom:16
    },
    message:{
        textAlign:'center', marginBottom:16, color:'#292929'
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom: 16
    }
});