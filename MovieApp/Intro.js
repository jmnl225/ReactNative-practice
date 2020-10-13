import React, {Component} from 'react';
import {View, Text, StyleSheet, BUtton, ActivityIndicator} from 'react-native';
import AsyncStorage from 'react-native-community/asynce-storage';

// Async에 저장된 로그인정보의 유무에 따라 navigate만 수행하므로
// stateful Component( component를 상속한 클래스 )로 만들 필요 없음.

export default Intro = (props) => {//파라미터 : 부모로부터 전달된 props

    //return으로 화면에 보일 컴포넌트가 보여지는ㄴ 작업 후,
    //asyncStorage에 저장된 로그인 유무정보 읽어오기

    AsyncStorage.getItem('email')
    .then( (value) =>{
        if(value) props.navigation.replace('MainDrawerNav'); //로그인 정보가 있다면 앱의 메인으로
        else props.navigation.replace('LoginNav'); // 정보가 없다면 로그인 화면으로
        // 현재 컴포넌트를 finish하면서 이동하기 때문에 navigate가 아닌 replace
    } );

    //AsyncStorage 가 비동기방식이므로 읽어오는 사이에 잠시 보여질 수 있는 화면 (로딩중 화면)
    return(
        <View style={styles.root}>
            {/* color속성이 없으면 보이지 않기때문에 꼭 설정해야함 */}
            <ActivityIndicator size="large" color="green" ></ActivityIndicator>
        </View>
    )
    
}


const styles= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
});
