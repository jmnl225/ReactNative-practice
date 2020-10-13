import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    //대량의 데이터들
    state = {
        datas:["aaa","bbb","ccc","ddd"],

        //FlatList에 보여지는 데이터들은 [key] 프로퍼티(멤버변수)를
        //가지고 있어야 경고가 나오지 않음.

        datas2:[
            {key:"0", data:"aaa"},
            {key:"1", data:"bbb"},
            {key:"2", data:"ccc"},
            {key:"3", data:"ddd"},
            {key:"4", data:"eee"}
        ],

        datas3:[
            {name:"Sam", msg:"Hello world", img:require('./images/moana01.jpg')},
            {name:"Robin", msg:"Hello android", img:require('./images/moana02.jpg')},
            {name:"Hong", msg:"Hello web", img:require('./images/moana03.jpg')},
            {name:"Kim", msg:"Hello react-native", img:require('./images/moana04.jpg')},
            {name:"park", msg:"Hello java", img:require('./images/moana05.jpg')}
        ]
    };

    render(){

        //datas3 배열의 각 요소객체들의 멤버변수로 key가 존재하지 않아서 경고.
        // 배열의 각 요소객체들에 key 속성을 동적 추가!
        // this.state.datas3[0].key = "0";

        // 1. key를 대량의 정보에 추가시킴
        // this.state.datas3.forEach( (element, index)=>{
        //     element.key= index+"";
        //     //key 프로퍼티의 값은 중복되면 안됨, int 안됨.
        // } );

        return(
            <View style={styles.root}> 
                <Text style={styles.titleText}>Flat List</Text>

                <FlatList
                    data={ this.state.datas3 }
                    render={ ( {item} )=>{
                        return(
                            <TouchableOpacity onPress={ ()=>{Alert.alert(item.name)} } style={styles.itemView}>
                                <Image source={item.img} style={styles.itemImg} ></Image>
                                <View>
                                    <Text style={styles.itemName}> {item.name} </Text>
                                    <Text style={styles.itemMsg}> {item.msg} </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    } }
                    
                    //아이템의 식별 key 프로퍼티 설정
                    keyExtractor= { (item)=>{return item.name} }

                    //스크롤바 안 보이게 감추는 방법
                    showsVerticalScrollIndicator = {false}
                    //옆으로 넘기도록
                    //horizontal={true}

                    >
                </FlatList>

            </View>
        );
    }
}//Main class

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'lightgrey',
        padding:16
    },
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:16
    },
    itemView:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold'
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic'
    }
});