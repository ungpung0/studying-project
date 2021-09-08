import React, {Component} from "react";
import './AppChapter3.css';
import MyComponent from "./MyComponent";

// 함수형 컴포넌트의 예.
/*function AppChapter3() {
    const name = '리액트';
    return <div className="react">{name}</div>
}*/

// 클래스형 컴포넌트의 예.
/*class AppChapter3 extends Component {
    render() {
        const name = "리액트";
        return <div className="react">{name}</div>
    }
    // 클래스형 컴포넌트와 함수형 컴포넌트의 차이는 아래와 같다.
    // 1) 클래스형 컴포넌트는 State 기능을 지원한다.
    // 2) 클래스형 컴포넌트는 라이프사이클 기능을 지원한다.
    // 3) 클래스형 컴포넌트는 임의 메서드를 정의할 수 있다.
}*/

const AppChapter3 = () => {
    return <MyComponent name="React" favorNum="7">리액트</MyComponent>
    // MyComponent 컴포넌트를 불러왔다.
}

export default AppChapter3;