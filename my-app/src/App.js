import './App.css';
/* 
  리액트란? 컴포넌트 == 리액트
  UI를 구축하는 JS"라이브러리"겸 프레임워크. 동적으로 사용자가 보게될 화면을 꾸밀 수 있음

  컴포넌트 ?
  UI 구성을 확장성있고, 유연하게 만들어주기 위해 만들어짐
  - 어떻게? 화면을 이루는 구성요소 하나하나를 "컴포넌트"로 만들어서 재사용성을 늘렸다.

  리액트에서는 버튼, 폼, 다이얼로그, 화면 모든것들을 컴포넌트로 표현
*/
// import LifecycleUpdate from './01_LifeCycle';
import PropsDatatype from './02_PropsDatatype';
/*
  JSX(JavascriptXML)문법 : javascript문법 안에는 HTML요소가 함께 들어가있는 형태의 언어
  리액트에서 ui를 구성하기 위해 보편적으로 사용되는 문법
  자바스크립트의 문법을 통해 HTML 요소를 생성하는 역할을 함

  -> 자바스크립트 문법 안에 html요소가 함께 들어가있는 형태의 언어, react를 개발할때 보편적으로 사용된다.
  
  document.createElement("div") (명령적방식)
  let body = document.querySelector("body");
  let div = document.querySelector("div");
  let h2 = document.querySelector("h2");

  body.appendChild(div.appendChild(h2));

  따라서 개발자는 복잡한 자바스크립트 코드를 짤 필요없이 동적으로 DOM요소를 단순 코드 선언만으도 만들 수 있다.
  (선언적 방식)

  내가 작성한 JSX코드가 실제로 실행될때 리액트가 브라우저에서 구동되는 자바스크립트 코드로 작동이 컴파일되면서 구동(실행)이된다.
*/




function App() {
  return (
    // <h2>start react</h2>
    // return문안에 반환되는 값은 무조건 1개여야함
    // 위코드 실행시키면 오류남
    <div>
      {/* //JSX 영역 문법 -> //주석 안먹힘 -> {}로 묶어줘야함 */}
      {/* JSX문법 영역안에서 주석을 사용하는 방법 */}
      {/* <h2>start react</h2> */}
      {/* import해온 Component 클래스를 그대로 태그(마크업)으로써 사용하면 된다 */}
      {/* <LifecycleUpdate prop_value="From App.js"></LifecycleUpdate> */}
      {/* 
        props ? 부모컴포넌트가 자식컴포넌트에 넘겨주는 "객체" 형태의 데이터({key : value})
        자식컴포넌트의 시작태그에 작성하는 속성은 key값으로, 속성값은 value값의 형태로 넘어간다.
      */}
      
      <PropsDatatype 
      String='react' 
      Number={200} 
      Boolean
      Array={[0,1,8]}
      ObjectJson={{react:"리액트", today:20230510}}
      Function={console.log("Fuction Props")}
      IsRequired={10}
      StringDefault="ㅎㅎㅎ"
      ></PropsDatatype>
    </div>
  );
}

export default App;
