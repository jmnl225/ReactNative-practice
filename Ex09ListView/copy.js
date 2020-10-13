import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

class Main extends Component{

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
        ]
    };

    render(){
        return(
            <View style={styles.root}> 
                <Text style={styles.titleText}>Flat List</Text>

                {/* 안드로이드의 리스브튜와 같은 역할 */}
                {/* 2개의 필수 속성 설정 */}
                {/* 1. data : flatList가 보여줄 대량의 데이터들 지정 */}
                {/* 2. renderItem : 아이템 하나의 모양(컴포넌트)를 만들어서 리턴해주는 함수 */}

                {/* FlatList가 보여줄 대량의 데이터 배열 각 요소들은 반드시 !!!! */}
                {/* 중복되지 않는 값을 가진 key 멤버변수가 있어야한다. */}
                
                <FlatList 
                     data={ this.state.datas2 } 
                     renderItem={ ({item} )=>{  //리턴한것이 화면에 나옴. 파라미터로 대량의데이터에 입력해둔 값을 받아옴. (listLayout의 value)
                        
                        //2. 구조분해할당 : 객체에서 해당되는 데이터를 빼옴! 따라서 {} 안에 받아올 이름(반드시 같아야함) 
                        //item, index를 적어서 필요한 멤버변수를 뽑아서 let 변수 안에 넣겠다.
                        //let {item, index} = obj; 

                        // 3. 차라리... 이렇게 받아올 수 있다면 처음부터 {} 이렇게 받아오면 되지 않을까? -> renderitem () 파라미터 안에 {}를 넣어 받아오기
                        
                        //1. 매번 리턴할때마다 obj.index .. 쓰기 불편하니까 변수에 대입.
                        //let item = obj.item;
                        //let index = obj.index;

                        //4. 대량의 데이터에는 꼭 key라는 프로퍼티가 필요. 따라서 객체안에 key를 넣어두었으니 데이터를 뽑아오려면.

                         //return <Text> {index} : {item.data} </Text>;
                         return <Text> {item.key} : {item.data} </Text>;
                     } } >
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
    }
});