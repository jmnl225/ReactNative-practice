import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{
    render(){

          // XML 컴포넌트를 변수에 대입하는 것이 가능함
          const aaa =<Text>Nice</Text>;
          const bbb = <View style={ {margin:16} }>
  
                          <Text>Hello RN</Text>
                          <Button title="button"></Button>
  
                      </View>;
  
          const datas = ["sam", "robin", "park", "kim", "sam", "robin", "park", "kim", "sam", "robin", "park", "kim"];
          
        //   const arr2 = [
        //       <View Key={aa}><Text>aaa</Text></View>,
        //       <View Key={bb}><Text>bbb</Text></View>,
        //       <View Key={cc}><Text>ccc</Text></View>
        //   ];
  

          

        return(
            <View>

               <Text style={styles.title}>List Layout Test</Text>
                
               {/* 배열로 컴포넌트들을 열거하려면 */}
               {/* 각 컴포넌트를 구별하기위해 Key 라는 property가 있어야함. */}


               {/* 대량의 문자열 데이터를 */}
               {/* 보여주기위한 Text컴포넌트를 */}
               {/* 데이터의 개수만큼 자동으로 만들기 */}
               {/* map ? 함수값을 리턴받아 돌려줌. */}

                <ScrollView>

                    {
                        kkk = datas.map((value, index) => {
                            return (
                                    <TouchableOpacity onPress={ ()=>{this.clickBtn(index);} } style={styles.itemView} Key={index}>
                                        <Text> {value} </Text>
                                    </TouchableOpacity>
                            );
                        } )
                    }

                </ScrollView>




            </View>
        );
    }//render

        //아이템 클릭 콜백함수
        clickBtn = (index) => {
            Alert.alert(index+"");
        }

}//Main

//스타일객체들 적용
const styles= StyleSheet.create({
    title:{
        margin:16,
        fontSize:28,
        fontWeight:'bold'
    },
    itemView:{
        padding:16,
        margin: 12,
        borderRadius: 6,
        borderWidth: 1
    }
});



