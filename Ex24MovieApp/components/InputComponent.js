import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

//단순 스타일링 된 TextInput을 만드는 것이므로
//state는 사용할 필요 없음.. 그렇기에 간단한 함수형 component 제작
export default InputComponent = (props)=>{
    return(
        <View style={styles.container}>
            <TextInput 
                selectionColor="#292929"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="#c3c2c8"
                secureTextEntry={props.secureTextEntry}
                placeholder={props.onChangeText}
                style={styles.input}>
                </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:'#575757',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginTop:8,
        marginBottom:8
    },
    input:{
        flex:1,
        color:'#292929',

    }
});