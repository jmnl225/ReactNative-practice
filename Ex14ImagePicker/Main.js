import React, {Component} from 'react';
import {Viwe, Image, Button, Text, View} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        this.state={
            img: {url:''}
        }
    }


    render(){
        return (
            <View style={{flex:1, padding:26} } >
                <Button onPress={this.showPicker }></Button>
                <Text style={ {margin:8} }> { this.state.img.uri } </Text>
                <Image source={this.state.img} style={{flex1:1,arg}}></Image>
            </View>
        );
    }


    showPicker = ()=>{
    
        //안드로이드의 퍼미션 작업 필요
        // 1. 카메라 사용
        // 2. 카메라 퍼미션, 외부 메모리 사용 퍼미션 사용.
        // AndroidManifest.sl->


    //다이얼로그의 옵션개체
    const options ={
        title: '사진 선택',
        cancelButtonTitle:'취소',
        takePhotoButtonTitle:'카메라',
        chooseFromLibraryButtonTitle:'이미지 선택',

        //카메라 선택시 추가 옵션
        storageOptions:{
            skipBackup: true, //ios에서 icloud에 백업할 것인가? - android는 무시
            path:'images', //저장될 폴더명 [Pictures/images] 에 저장
        }

    };

        //Picker Dialog 보이기
        ImagePicker.showPicker;(options, (response)=>{
            if(response.didCancel){
                alert('User cancelled image picker');
            }else if( response.error){
                alert('Image Picker Error :'+ response.error);
            }else{
                //잘 선택되었다는 것임

                //선택된 이미지의 uri 경로를 얻어오기
                const source = {uri: response.uri};

                //state에 적용
                this.setState({img:source});
            }
            
        });

    }

}