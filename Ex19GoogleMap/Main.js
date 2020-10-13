import React, {Component} from 'react';
import {View, Text, Linking} from 'react-native';

import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// 위치정보제공자= provider 구글에서 자동으로 가져오기

export default class Main extends Component{
    state={
        region:{
            latitude:37.562080,
            longitude:127.035192,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007
        },

        // 여러개의 마커 정보들
        Markers:[
            {
                latlng: {latitude:37.562516, longitude:127.035679},
                title: "희망약국",
                description: "왕십리에 있는 약국"
            },{
                latlng: {latitude:37.561155, longitude:127.034560},
                title: "이수프라자약국",
                description: "왕십리에 있는 약국"
            },{
                latlng: {latitude:37.560710, longitude:127.035978},
                title: "연세우리약국",
                description: "왕십리에 있는 약국"
            },{
                latlng: {latitude:37.562162, longitude:127.032171},
                title: "왕십리약국",
                description: "왕십리에 있는 약국"
            }
        ]

    };

    render(){
        return(
            <View style={{flex:1, padding:16}}>
                <Text style={{padding:8, fontWeight:'bold', fontSize:22}}>Map Test</Text>

                <MapView
                    style={{flex:1}}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={ this.state.region }>

                    <Marker
                    // 마커에게 필요한 lat, log만 갖고있으면 다른 정보가 더 있어도 상관없음.
                        coordinate={ this.state.region }
                        title="미래 능력 개발 교육원"
                        description='http://www.mrhi.or.kr'
                        >
                    </Marker>

                    <Marker
                    // 마커에게 필요한 lat, log만 갖고있으면 다른 정보가 더 있어도 상관없음.
                        coordinate={ {latitude: 37.561727, longitude: 127.036370} }
                        title="성동경찰서"
                        description='https://www.smpa.or.kr'>
                    </Marker>

                    {/* 마커 여러개를 한번에! */}
                    {
                        this.state.Markers.map( (marker, index)=> {
                            return(
                                <Marker
                                    coordinate={marker.latlng}
                                    title={marker.title}
                                    description={marker.description}
                                    key={index}
                                    image={require('./icons/icon.png')}>
                                </Marker>
                            );
                        } )
                    }

                    {/* 미카 Callout(툴팁박스) 클릭반응하기 */}
                    <Marker
                        coordinate={{latitude:37.563341, longitude:127.036909}}
                        title="성동구청"
                        description="http://www/sd.go.kr"
                        onCalloutPress={ this.clickMarker }>
                    </Marker>

                </MapView>

            </View>
        );
    }

    clickMarker= () => {
        //웹브라우저 열기 
        Linking.openURL('http://www.sd.go.kr');
    }

}