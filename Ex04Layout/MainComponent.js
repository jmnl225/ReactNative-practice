import React, {Component} from 'react';
import {View} from 'react-native';

export default class MainComponent extends Component{
    render(){
        return (

            // flex의 정렬: 1. justify-content / 2. align-items
            // flex와 같은 방향(수직일때 수직정렬)은 justify-content
            // flex와 다른 방형(수직일때 수평정렬)은 align-items

            // <View style={ {flex:1, flexDirection:'column'} }>

            //     <View style={ {width:50, height:50, backgroundColor:'red'} }></View>
            //     <View style={ {flex:1, backgroundColor:'green'} }></View>
            //     <View style={ {flex:1, backgroundColor:'blue'} }></View>
            //     {/* 부모의 사이즈가 적용되어 있지 않으면 flex가 적용되지 않음 */}

            // </View>

            <View style={ {flex:1, flexDirection:'column'} }>
                {/* 크게 세로 1:2 */}
                <View style={ {flex:1, flexDirection:'row'} }>
                    {/* 가로 1:2 */}
                    <View style={ {flex:1, backgroundColor:'green'} }>
                        {/* 절대위치 : 뷰를 겹쳐서 배치 가능 */}
                        <View style={ {width: 50, height: 50, backgroundColor:'white', position:'absolute', left:30, top:30} }></View>
                        <View style={ {width: 50, height: 50, backgroundColor:'grey', position:'absolute', left:50, top:50} }></View>
                    </View>

                    <View style={ {flex:2, backgroundColor:'navy'} }></View>

                </View>

                <View style={ {flex:2, flexDirection:'row'} }>
                    {/* 가로 2:1 */}
                    <View style={ {flex:2, backgroundColor:'orange'} }></View>
                    <View style={ {flex:1, backgroundColor:'purple'} }>
                      <View style={ {width:50, height:50, backgroundColor:'grey', position:'absolute', right: 10, bottom: 10} }></View>
                      <View style={ {width:50, height:50, backgroundColor:'white', position:'absolute', left: 10, top: 10} }></View>
                    </View>
                    {/* react-native 에서는 모두 flex 아니면 absolute */}

                </View>

                <View style={ {width:50, height: 50, backgroundColor:'skyblue', position:'absolute', bottom:50, left:250, borderRadius: 25 } }></View>

            </View>


        );
    }
}

