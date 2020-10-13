import React, {Component} from 'react';
import {View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    //대량의 데이터 배열 - 화면갱신 반영
    state= {
        datas: [
            { name:"Sam", msg:"Hello world", img:require('./images/moana01.jpg') },
            { name:"Robin", msg:"Hello android", img:require('./images/moana02.jpg') },
            { name:"Park", msg:"Hello react-native", img:require('./images/moana03.jpg') },
            { name:"Kim", msg:"Hello web", img:require('./images/moana04.jpg') },
            { name:"Choi", msg:"Hello java", img:require('./images/moana05.jpg') },
            { name:"Moana", msg:"Hello moana", img:{uri:'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21RK/image/8bi2BqpjZKFgzcME2mrNSTbHK7Q.jpg'} },
            { name:"Sam", msg:"Hello world", img:require('./images/moana01.jpg') },
            { name:"Robin", msg:"Hello android", img:require('./images/moana02.jpg') },
            { name:"Park", msg:"Hello react-native", img:require('./images/moana03.jpg') },
            { name:"Kim", msg:"Hello web", img:require('./images/moana04.jpg') },
            { name:"Choi", msg:"Hello java", img:require('./images/moana05.jpg') },
            { name:"Moana", msg:"Hello moana", img:{uri:'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21RK/image/8bi2BqpjZKFgzcME2mrNSTbHK7Q.jpg'} },
            { name:"Sam", msg:"Hello world", img:require('./images/moana01.jpg') },
            { name:"Robin", msg:"Hello android", img:require('./images/moana02.jpg') },
            { name:"Park", msg:"Hello react-native", img:require('./images/moana03.jpg') },
            { name:"Kim", msg:"Hello web", img:require('./images/moana04.jpg') },
            { name:"Choi", msg:"Hello java", img:require('./images/moana05.jpg') },
            { name:"Moana", msg:"Hello moana", img:{uri:'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21RK/image/8bi2BqpjZKFgzcME2mrNSTbHK7Q.jpg'} },
  
        ]
    };

    render(){
        return(
            <ScrollView style={ styles.root }>
                {/* 대량의 데이터를 가진 배열을 컴포넌트로 보여주기 */}

                {
                    this.state.datas.map( (element, index)=>{
                        return (
                            <TouchableOpacity onPress={ () => { this.clickItem(element, index); } } key={index} style={styles.item} >
                                <Image style={styles.itemImg} source={element.img}></Image>
                                <View>
                                    <Text style={styles.itemName}> {element.name} </Text>
                                    <Text style={styles.itemMsg} > {element.msg} </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    } )
                }

                {/* map 방식으로 리스트뷰를 만들경우에는 소규모의 데이터는 감당 ㅇㅋ */}
                {/* 하지만! 페이스북, 인스타, 트위터처럼 무한으로 늘어나는 데이터는 이 방식으로 구현 X */}

            </ScrollView>
        );

    }

    clickItem = (element, index) => {
        // Alert.alert(index + ":" + element.name);
        Alert.alert( `${index} : ${element.name}` );
        //백틱 (숫자키 1의 왼쪽의 키보드 `)
    }

} //Main

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        backgroundColor:'lightgrey'
    },
    item:{
        borderWidth:1,
        flexDirection:'row',
        borderRadius:4,
        padding:8,
        marginBottom:12,
        backgroundColor:'white'
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover', //긴쪽을 잘라냄
        marginRight:8
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold'
    },
    itemMsg:{
        fontSize:16,
        fontStyle:"italic"
    }
});