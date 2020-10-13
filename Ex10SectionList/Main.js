import React, {Component} from 'react';
import {View, Text, StyleSheet, SectionList, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    //생성자 안에 state를 더 자주 씀
    constructor(){
        super(); //상속받은 클래스의 생성자를 명시적으로 호출

        //대량의 데이터들 (그룹이 있음)
        this.state= {
            // SectionList의 섹션 하나 객체에는 title, data 2개의 프로퍼티 필요
            datas:[
                {title:'한식', data:['백반', '고기산적', '비빔밥', ]},
                {title:'일식', data:['초밥', '덮밥', '회', ]},
                {title:'중식', data:['짜장면', '짬뽕', '탕수육', ]}
            ]
        };
    }

    render(){
        return(
            <View style={styles.root}>

                {/* SectionList에 필수 속성 */}
                {/* 1. sections : 섹션 title과 섹션별 data를 가진 데이터들 */}
                {/* 2. renderSectionHeader : 섹션별 title 영역의 그려질 render 뷰를 리턴하는 콜백함수 */}
                {/* 3. renderItem : 섹션별 item들(string)의 그려질 render뷰를 리턴하는 콜백함수 지정 [FlatList]와 동일 */}

                <SectionList
                    sections={ this.state.datas }
                    renderSectionHeader={ ( {section} )=>{
                        return (
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle} > {section.title} </Text>
                            </View>
                        );
                    } }
                    renderItem={ ( {item, index, section} )=>{ 
                        return(
                            // <View style={styles.sectionItem}>
                            //     <Text> {item} </Text>
                            // </View>
                            <TouchableOpacity onPress={ (item)=>{Alert.alert(item.title)} } style={styles.sectionItem}>
                                <Text> {item} </Text>
                            </TouchableOpacity>
                        );
                     } }
                     
                     //위에서 각 아이템에 key 프로퍼티 지정을 안 해줌. 
                     keyExtractor={ (item, index) => index }

                     >
                </SectionList>

            </View>
        );

        // 2. item 클릭 이벤트 처리

    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },
    sectionHeader:{
        padding:8,
        backgroundColor:'#bbbbbb'
    },
    sectionTitle:{
        fontSize:24,
        fontWeight:'bold'
    },
    sectionItem:{
        padding:8
    }
});