import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppChapter2 from './chapter-2/AppChapter2'; // Chapter 2 참고.
import AppChapter3 from './chapter-3/AppChapter3';

ReactDOM.render(
    <React.StrictMode>
        {/*<AppChapter2/>*/}
        <AppChapter3/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
* import React from 'react'; : 리액트를 불러와서 사용할 수 있게 한다.
* ReactDOM.render() : 컴포넌트를 페이지에 렌더링하는 역할을 한다. 첫 번째 파라미터에서 JSX 형태로 내용을 작성하고,
*   두 번째 파라미터에서는 JSX를 렌더링할 Document 내부 요소를 설정한다.
* React.StrictMode : 리액트 레거시 기능을 사용하지 못하게 하는 기능이다. 옛날 기능을 사용하게 되면 경고를 출력한다.
* */
