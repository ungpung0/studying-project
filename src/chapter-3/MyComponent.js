import React from "react";
import PropTypes from 'prop-types';
const MyComponent = props => {
    // 비구조화 props 구조의 예 1.
    const {name, favorNum, children} = props;
    return (
        <>
            <div>비구조화 props 예1!</div>
            <div>Hello, My Name is {name}.</div>
            <div>Children Value is {children}.</div>
            <div>My Favorite Number is {favorNum}.</div>
        </>
    );

    /*일반 props 구조의 예.
    return (
        <>
            <div>New Component!</div>
            <div>Hello, My Name is {props.name}.</div> {/!*props를 사용하여 부모 컴포넌트에서 값을 삽입하였다.*!/}
            <div>Children Value is {props.children}.</div> {/!*부모의 MyComponent div 사이의 값을 출력한다.*!/}
        </>
    );*/

    MyComponent.defaultProps = {name: 'Default'};
    // defaultProps를 사용하여 부모 컴포넌트의 값이 없을 때, 기본값을 설정할 수 있다.

    MyComponent.propTypes = {
        name: PropTypes.string,
        favorNum: PropTypes.number.isRequired
    };
    // propTypes를 사용하여 prop의 형태를 변환할 수 있다.
    // isRequired를 사용하여 부모 컴포넌트의 값이 없을 때 오류를 출력할 수 있다.
};

// 비구조화 props 구조의 예 2.
const MyNewComponent = ({name, children}) => {
    return (
        <>
            <div>비구조화 props 예2!</div>
            <div>Hello, My Name is {name}.</div>
            <div>Children Value is {children}.</div>
        </>
    );
};

export default MyComponent; // 다른 파일에서 import 할 때, MyComponent 클래스를 불러오도록 만든다.

/*
* 화살표 함수(Arrow Function) : 함수를 파라미터로 전달할 때 사용한다.
*   function() {} 가 () => {} 이 되는 것이다. 그렇다고 완전히 같은 것은 아닌데,
*   this 범위에서 차이를 보인다. 일반 함수는 종속된 객체를 this로 가리키고,
*   화살표 함수는 종속된 인스턴스를 가리킨다.
*
* PropTypes 의 종류 :
*   1) array : 배열.
*   2) arrayOf(PropType) : 특정 PropType으로 이루어진 배열.
*   3) bool : true, false.
*   4) func : 함수.
*   5) number : 숫자.
*   6) object : 객체.
*   7) string : 문자열.
*   8) symbol : ES6의 Symbol.
*   9) node : 렌더링 가능한 모든 것(number, string, JSX Code, children 등등).
*   10) instanceOf(class) : 특정 클래스의 인스턴스.
*   11) oneOf(['dog', 'cat']) : 배열 요소 중 값 하나.
*   12) oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열 안의 종류 중 하나.
*   13) objectOf([React.PropTypes.number) : 객체의 모든 키 값이 인자로 주어진 PropType인 객체.
* */