import React from 'react';
import {View,  TouchableOpacity, Text, StyleSheet} from 'react-native';

const TabComponent = (props) => {
    
    //선택된 탭에 따라 글씨색상 변경
    let color = props.selected ? '#292929' : '#929292';

    //선택된 탭에 따라 경계선 색상도 변경
    containerStyle.borderBottomWidth= color;

    return(
        <TouchableOpacity style={containerStyle} onPress={props.onPress} >
            <Text style={{color: color}} > {props.label} </Text>
        </TouchableOpacity>
    );

}

let containerStyle= {
    flex:1,   //탭이 놓여질때 다른 탭과의 flex값을 같게하여 가로 사이즈를 균등하게 하기 위해
    borderBottomWidth: 1,
    borderColor: '#929292',
    paddingBottom: 8,
    alignItems:'center',
    justifyContent:'center',
};

export default TabComponent;