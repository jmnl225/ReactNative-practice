import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, PermissionsAndroid} from 'react-native';

//Geolocation 가져오기
import Geolocation from 'react-native-geolocation-service';

export default class Main extends Component{

    state={
        currPos:{latitude:0.0, longitude:0.0}, //위도, 경도
        id:''

    }

    render(){
        return(
            <View style={styles.root}>
                <Button onPress={this.clickBtn} color='red' title='get my location'></Button>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:16}}>
                    <Button onPress={this.clickBtn2} color='green' title='watch my location: update'></Button>
                    <Button onPress={this.clickBtn3} color='indigo' title='stop my location'></Button>
                </View>

                <View style={styles.textArea}>

                    <Text style={styles.text}> latitude: {this.state.currPos.latitude}</Text>
                    <Text style={styles.text}> longitude: {this.state.currPos.longitude}</Text>

                </View>

            </View>
        );
    }

    clickBtn3= ()=>{
        Geolocation.clearWatch(this.state.id);
    }

    clickBtn2= ()=> {
        const id = Geolocation.watchPosition(
            position=>this.setState({currPos:position.coords}),
            error=> alert('error: ' + error.message)
        );

        //this.setState({id:id}); //변수명과 프로퍼티명이 같으면 생략가능
        this.setState({id});

    }

    clickBtn= ()=>{
        Geolocation.getCurrentPosition(
            (position)=>{
                this.setState({currPos: [position.coords]});
            },
            (error)=>{
                alert('error:'+error.message);
            },
            {}
        );
    }

    /////////////////////// 동적 퍼미션 ///////////////////////////

    async requestLocationPermission(){
        // 반드시1! try - catch 사용을 권장.
        try{
            //퍼미션 요청 다이얼로그 보이도록 요청..
            //싱크로나이즈 -> then 대신에 async ~ await 사용
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            
            if(granted == PermissionsAndroid.RESULTS.GRANTED){
                alert('You can use the location');
            }else{
                alert('Location permission denied');
            }

        }catch(err){
            console.warn(err);
        }
    }

    //이 컴포넌트가 처음 화면에 보여질 때 자동으로 실행되는 라이프사이클메소드
    componentDidMount(){
        this.requestLocationPermission();
    }

    ///////////////////////////////////////////////////////////

    componentWillUnmount(){
        //if(this.state.id =! undefined )Geolocation.clearWatch(this.state.id);
        //if 조건이 0, undefined가 아닌경우 모두 참.
        if(this.state.id)Geolocation.clearWatch(this.state.id);
    }


}

const styles=StyleSheet.create({
    root:{flex:1, padding:16},
    textArea:{flex:1, justifyContent:'center', alignItems:'center'},
    text:{fontWeight:'bold', fontSize:20, padding:8}
});