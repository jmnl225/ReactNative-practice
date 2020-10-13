import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';

export default class Practice extends Component{

    // 대량의 데이터
    state={
        datas:[
            {name: "Moana01", msg: "Hello world", img: require('./images/moana01.jpg')},
            {name: "Moana02", msg: "Hello Moana", img: require('./images/moana02.jpg')},
            {name: "Moana03", msg: "Disney world", img: require('./images/moana03.jpg')},
            {name: "Moana04", msg: "How far I will go", img: require('./images/moana04.jpg')},
            {name: "Moana05", msg: "no matter how hard I tried", img: require('./images/moana05.jpg')},
            {name: "Disney", msg: "no matter how hard I tried", img: {uri:'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Walt_Disney_Pictures_2011_logo.svg/1200px-Walt_Disney_Pictures_2011_logo.svg.png'}},
            {name: "Moana01", msg: "Hello world", img: require('./images/moana01.jpg')},
            {name: "Moana02", msg: "Hello Moana", img: require('./images/moana02.jpg')},
            {name: "Moana03", msg: "Disney world", img: require('./images/moana03.jpg')},
            {name: "Moana04", msg: "How far I will go", img: require('./images/moana04.jpg')},
            {name: "Moana05", msg: "no matter how hard I tried", img: require('./images/moana05.jpg')},
            {name: "Disney", msg: "no matter how hard I tried", img: {uri:'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Walt_Disney_Pictures_2011_logo.svg/1200px-Walt_Disney_Pictures_2011_logo.svg.png'}}

        ]
    };



    render(){
        return(
            <ScrollView>

                {/* 대량의 데이터를 가진 배열을 컴포넌트로 보여줄 것임 */}

                {
                    this.state.datas.map( (element,index) => {
                        return(
                            <TouchableOpacity onPress={ ()=>{this.clickBtn(element,index)} } key={index} style={styles.item}>
                                <Image style={styles.itemImg} source={element.img} ></Image>
                                <View>
                                    <Text style={styles.itemNm}> {element.name} </Text>
                                    <Text style={styles.itemMsg}> {element.msg} </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    } )
                }

            </ScrollView>
        );
    }// render end.

    clickBtn = (element, index) => {
        Alert.alert(`게시글: ${index} \n 제목: ${element.name}`);
    }

}//class end.

const styles = StyleSheet.create({

    root:{
        flex:1,
        padding:16
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:8,
        margin:16
    },
    itemImg:{
        height:100,
        width:120,
        margin:8,
        resizeMode:"cover",
        marginRight:6
    },
    itemNm:{
        fontSize:20,
        fontWeight:'bold'
    },
    itemMsg:{
        fontStyle:'italic',
        fontSize:18
    }


});