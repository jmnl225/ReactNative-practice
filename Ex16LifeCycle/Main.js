import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default class Main extends Component{
    //1. 생성자
    constructor(){
        super();

        //로그 출력
        console.log('constructor');
    }

    //2. 화면에 보이기 전에  이 컴포넌트 클래스가 화면에 연결되기 직전에 호출
    // (Deprecated) -> 지금 사용하면 경고표시 됨..
    UNSAFE_componentWillMount(){
        //앞에 UNSAFE_ 를 붙이면 사용할 수는 있음. 경고도 안 뜸!
        console.log('Component will mount');
    }

    //3. 화면에 그려질때 호출
    render(){
        console.log('render');
        return 
        <View>
            
            <Text>Hello RN</Text>
            <Button title="set state"></Button>
        
        </View>;
    }

    //4. 화면에 그려진 후 딱 1번 호출되는 메소드
    //보통 여기에서 네트워크 데이터 fetch작업 수행
    //또는 navigation의 옵션 설정들 수행
    //또는 file에 저장된 데이터 읽어오는 작업 수행
    componentDidMount(){
        console.log('component did mounted');
    }

    //5. render() 호출 후에 매번 실행됨 (즉, 화면 갱신때마다 실행)
    componentDidUpdate(){
        console.log('component did Update');
    }

    //6. component가 종료될때 호출
    componentWillUnmount(){
        console.log('component will unmounted');
    }

}