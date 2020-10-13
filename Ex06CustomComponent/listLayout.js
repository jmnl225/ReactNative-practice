import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class listLayout extends Component{
    render(){

        // XML 컴포넌트를 변수에 대입하는 것이 가능함
        const aaa =<Text>Nice</Text>;
        const bbb = <View style={ {margin:16} }>

                        <Text>Hello RN</Text>
                        <Button title="button"></Button>

                    </View>;

        const arr = [aaa, bbb, bbb, aaa];
        
        const arr2 = [
            <View Key={aa}><Text>aaa</Text></View>,
            <View Key={bb}><Text>bbb</Text></View>,
            <View Key={cc}><Text>ccc</Text></View>
        ];

        //실제는 대량의 데이터들을 가진 배열
        const datas=["aaa", "bbb", "ccc"];

        const kkk= [this.shortItemView]

        return(
            <View style={styles.root}>
                <Text style={styles.title} ></Text>

                {/* 배열로 컴포넌트들을 열거하려면 */}
                {/* 각 컴포넌트를 구별하기위해 Key 라는 property가 있어야함. */}

                {bbb}
                {bbb}
                {this.shortItemView("Sam", "indigo")}
                {this.shortItemView("Robin", "green")}
                {this.shortItemView("Park", "skyblue")}

            </View>
        );
    }

    //XML 컴포넌트를 리턴해주는 메소드
    // 파라미터 변수만들기 : 변수명만 적어야함!

    shortItemView( name, color             ){
        return <View style={{margin:16}}>
                    <Text>Nice {name}</Text>
                    <Button title='press' color={color}></Button>
               </View>;
    }
    
}//Main Class


const styles{
    root{
        
    },
    title{
        fontWeight:'bold',

    }

};