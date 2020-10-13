import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

//단순히 스타일링된 TextInput을 만들면 되기에 state를 별도로 만들필요 없음!
// const는 만들면서 export 불가

const InputComponent = (props) => {
    return (
        <View style={styles.container} >
            <TextInput
                selectionColor='#292929'
                secureTextEntry= {props.secureTextEntry} // 컴포넌트 사용하는 곳에서 지정된 property속성값 사용
                autoCapitalize = 'none'
                autoCorrect={false}
                allowFontScaling={false}
                placeholderTextColor='#c3c2c8'
                onChangeText={props.onChnageText}
                
                style={styles.input}>
            </TextInput>
        </View>
    );
} 


const styles= StyleSheet.create({
    container:{
        width:'100%',
        height: 40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor: '#D3D3D3',
        borderRadius: 4,
        backgroundColor: '#FAFAFA',
        marginTop:8,
        marginBottom:8,
    },
    input:{
        flex:1,                //TextInput의 높이를 container높이 40에 맞게
        color: '#292929',
    }
});

export default InputComponent;