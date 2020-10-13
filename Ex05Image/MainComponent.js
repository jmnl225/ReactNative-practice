import React, {Component} from 'react';
import {View, Image, Text, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, ScrollView, ImageBackground} from 'react-native';

export default class MainComponent extends Component{

    //이미지 경로 값을 가진 변수
    //값이 변경되면 자동으로 화면이 갱신되는 특별한 멤버변수 [state]

    state = {
        //객체로 만들면 멤버변수를 여러개를 만들어서 사용할 수 있으므로 객체로 사용.
        img: require("./images/moana01.jpg"),

        imgs: [
            require('./images/moana01.jpg'),
            require('./images/moana02.jpg'),
            require('./images/moana03.jpg'),
            require('./images/moana04.jpg'),
            { uri:"https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21RK/image/8bi2BqpjZKFgzcME2mrNSTbHK7Q.jpg" }
        ],

        imgNum:0
    };


    render(){
        return (
            <View style={{flex:1}}>

                <ImageBackground source={ require('./images/moana05.jpg') } style={ {width:'100%', height:'100%'} }>
                    <Text style={ {alignSelf:'center '} } >Hello</Text>
                    <Text>This is Background image</Text>
                </ImageBackground>

                <ScrollView>
                    
                    <Image source={ require('./images/moana01.jpg') } style={imgStyle} ></Image>
                    <Image source={ require('./images/moana02.jpg') } style={imgStyle} ></Image>
                    <Image source={ require('./images/moana03.jpg') } style={imgStyle} ></Image>
                    <Image source={ require('./images/moana04.jpg') } style={imgStyle} ></Image>
                    <Image source={ require('./images/moana05.jpg') } style={imgStyle} ></Image>

                </ScrollView>

                

                {/* <TouchableOpacity onPress={ this.changeImage }>

                    <View style={ {width:310, height:200, backgroundColor:'lightblue', borderRadius:8, justifyContent:'center', alignItems:'center'} }>
                        <Text style={ {fontWeight:'bold', marginBottom: 16} }>Hello</Text>
                        <Image style={ {width:300, height:150} } source={this.state.imgs[this.state.imgNum]}></Image>
                    </View>

                </TouchableOpacity> */}
{/* 
                <TouchableNativeFeedback background={ TouchableNativeFeedback.SelectableBackground() } onPress={ this.clickBtn } style={ {width:208, padding:4} }>

                    <Image
                        style={ {width:200, height: 200} }
                        source={  this.state.img  }></Image>

                </TouchableNativeFeedback> */}

                {/* <Image 
                    style={ {width:200, height:300} }
                    source={ this.state.img }>

                </Image>

                <Image
                    source={ {uri:"https://pds.joins.com/news/component/newsis/201805/02/NISI20180502_0000140956_web.jpg"} }>
                </Image>
                <Button title="Button" onPress={}></Button> */}
            </View>

        );
    }//render

    changeImage =() =>{
        let num = this.state.imgNum +1;
        if(num>4) num=0;
        this.setState( { imgNum: num } );
    }

    clickBtn = () => {
        //특별한 변수 state를 변경 = 자동화면 변경
        // require 뒤에 오는 주소는 변수가 안됨!! -> const 상수는 됨 
        this.setState( {img: require("./images/moana02.jpg")} );
    }

    
}//MainComponent


//이미지 스타일 객체
const imgStyle={
    width:350,
    height:500,
    margin:16,
    borderRadius:8

};