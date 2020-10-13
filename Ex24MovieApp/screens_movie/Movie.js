import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import BigCatalogList from '../components_movie/BigCatalogList';
import SubCatalogList from '../components_movie/SubCatalogList';

export default class MovieList extends Component{
    render(){

        //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
        
        // 평점순 영화 정보 불러오는 url 
        const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
        
        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";

        return(
            <ScrollView style={styles.root}>
                {/* 큰 이미지는 가로 스크롤(페이징)로 보여주기 */}
                <BigCatalogList 
                    uri={bigUrl}
                    // 클릭하면 개별적영화 고유의 id
                    // onPress={ (id)=>{
                    //     this.props.navigation.navigate('MovieDetail', {id:id});
                    // } }
                ></BigCatalogList>

                {/* 최신등록순
                <SubCatalogList 
                    onPress={ (id)=> this.props.navigation.navigate('MovieDetail', {id}) }
                    //눌렀을때 아이템의 id를 전달. 그걸 'movidetail로 가져감.'
                    title="최신등록순"
                    uri={recentUrl}></SubCatalogList>

                 평점순 
                <SubCatalogList 
                    title="평점순"
                    uri={ratingUrl}></SubCatalogList>

                 다운로드순 
                <SubCatalogList 
                    title="다운로드순"
                    uri={downloadUrl}></SubCatalogList> 
            
                */}


            </ScrollView>
        );
    }

    
    //제목줄 작업
    componentDidMount(){
        this.props.navigation.setOptions({
            headerTitleAlign:'center',
            headerRight: ()=>{
                return (
                    <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()} style={{marginRight:16}}>
                        <Image source={require('../Images/ic_menu.png')} ></Image>
                    </TouchableOpacity>
                );
            },

            headerLeft: ()=>(
                            <TouchableOpacity
                                style={{marginLeft:16, flexDirection:'row', alignItems:'center'}}
                                onPress={ async()=>{
                                    await AsyncStorage.removeItem('email');
                                    this.props.navigation.replace('Intro');
                                }}>
                                <Image source={require('../Images/ic_profile.png')} ></Image>
                                <Text style={{marginLeft:4}}>로그아웃</Text>
                            </TouchableOpacity>
                        )
            
            
        });
    }

}


const styles = StyleSheet.create({
    root:{ flex:1, backgroundColor:'#FEFFFF' }
});