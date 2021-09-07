import './App.css';

function VarLetConstDifference() {
  var a = "Hello Var";
  let b = "Hello Let";
  const c = "Hello Const";

  if(true) {
    var a = "Bye Var";
    let b = "Bye Let";
    const c = "Bye Const";
    console.log(a, b, c);
  }
  console.log(a, b, c);
  /*
  * var : if 문에서 재선언된 값이 밖에서도 유지되는 것을 볼 수 있다.
  * let : if 문에서 재선언된 값이 밖에서 유지되지 않는다.
  * const : if 문에서 재선언된 값이 밖에서 유지되지 않는다.
  * 이유 : var은 함수 단위이고 let, const는 블록 단위이기 때문이다.
  *   또한, let과 const는 블록 내부에서 재선언이 불가하다.
  * */
}

function App() {
  return (
      <>
        <h1>Hello React!</h1>
        <h2>Are you Fine!</h2>
        <button onClick={VarLetConstDifference}>차이점반환</button> {/*VarLetConstDifference 함수 테스트용 버튼.*/}
      </>
      // return을 사용할 때, 하나의 div로 묶어야 한다.
      // 이는, Virtual DOM 에서 컴포넌트 내부는 하나의 DOM 트리 구조여야 한다는 규칙 때문이다.
      // div가 싫을 경우, Fragment, <></>를 사용할 수 있다.
  );
}

export default App;

/*
* node_modules : react 모듈이 설치되는 패키지이다.
* function App() : 함수형 컴포넌트.
* */

/*
* 용어풀이
* 번들러(bundler) : 브라우저에서 모듈을 불러오기 위해 사용하는 기능이다.
* 웹팩(webpack) : import, require 문으로 불러오는 모듈,파일들이 하나로 합쳐진 결과물이다.
* 바벨(babel) : 최신 자바스크립트를 구버전 웹 브라우저와 호환시키기 위하여 ES5 문법으로 변환하는 도구이다.
* JSX : XML과 비슷하게 생긴 자바스크립트 확장 문법으로, 바벨을 사용하여 자바스크립트 형태로 변환된다.
* */