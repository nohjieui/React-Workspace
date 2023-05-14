/*
    현재 만든 모듈을 받아주는 모듈에서는
    1. 모듈에서 default옵션을 사용해서 export했다면
    import 모듈명 from '모듈경로';

    2. 모듈에서 default옵션을 사용하지 않고 export했다면(즉, export개체가 여러개일 수 있다면)
    import {가져올개체} from '모듈경로';
 */
    import {Component} from "react";
    /* 현재 클래스를 Component로 사용하기 위한 임포트문 */
    
    /*
        Component의 생명주기(생성, 변경, 소멸)
        
        Component와 관련된 함수 중 '생성'과정과 연관된 함수

        1. render() : return되는 html형식의 코드를 화면에 그려주는(랜더링)함수
                      화면에 내용이 변경되어야할 시점에 자동으로 호출됨
        2. constructor(props) : 생성자함수로 생명주기 함수들 중 가장 먼저 실행되며 처음 한번만 실행됨
                                component내부에서 사용되는 변수(state)를 선언하고 부모객체애서 전달받은 변수(props)를 초기화할 때 사용한다.
                                super()함수는 생성자함수 가장 위에서 호출함(자바와 동일)
                                
                                props ? 부모컴포넌트가 자식컴포넌트에 넘겨주는 "객체" 형태의 데이터({key : value})
                                자식컴포넌트의 시작태그에 작성하는 속성은 key값으로, 속성값은 value값의 형태로 넘어간다.
        3. getDerivedStateFromProps(props, state) : constructor()함수 호출 다음과 render메서드 호출되기 직전에 실행된다.
                                                    컴포넌트가 새로운 props를 받게 됐을때 state값을 변경해줌.
                                                    app.js에서 전달한 prop_value라는 변수를 props.prop_value로 접근해서 가져올 수 있다.
        4. componentDidMount() : 생성과 관련된 함수들 중 가장 '마지막'에 실행됨.
                                 화면이 만들어지고나서 할 수 있는 작업인 이벤트 부여나, 초기화 작업시 활용되는 메소드
                                 초기화시에는 setState() 함수를 활용함.
                                 setState() 현재 컴퍼넌트의 state값을 변경해주며, state값 변경시 render메서드가 자동으로 호출됨
        ===============================================================================================================================
        Component의 생명주기 중 '변경'과정과 연관된 함수
        
        5. shouldComponentUpdate(props, state) : 직역하자면 컴포넌트를 수정해야하나?
                                                 props, state가 새로운 값으로 갱신되어 render()메서드가
                                                 호출되는 시점(setState사용시)을 캐치하여 컴포넌트를 업데이트 할지 여부를 결정한다.
                                                 반환값은 true/false로 설정하며 true값 반환시에는 render메서드를 재호출하여 컴포넌트를 수정함(잘 사용안됨)
                                                 주의점 : 초기 랜더링, forceUpdate() 두가지 케이스시에는 호출되지 않음.
        @ 6. componentDidUpdate() : 컴포넌트가 실제 화면에 출력된 이후에 실행
                                    이 함수는 부모 컴포넌트로부터 전달된 이전 props와 이전 state를 인자로 전달받음
        ===============================================================================================================================
        소멸과정과 연관된 함수
        @ 7. componentWillUnmount() : 컴포넌트가 제거되기 직전에 수행
    
    */
    class LifecycleUpdate extends Component{ // 리액트 클래스에서 얻어온 Component 상속받음
        
        constructor(props){
            // 매개변수(props)로 LifecycleUpdate 클래스를 랜더링하거나 뿌려줄 때 초기화 시킨 값들을 얻어올 수 있음
            super(props); /* 부모생성자 호출 / 호출하는 이유? 부모생성자에있는 매서드 사용할수 있게하려고 */
            
            // 현재 이 컴포넌트 내부에서 사용할 변수(state)들을 생성자 내부에 선언
            this.state = {}; /* LifecycleUpdate 클래스 내부에서 실행할 함수 생성 */
            /* state ? 컴포넌트 내부에서 전역변수를 저장할 객체, 보통은 부모로부터 전달받은 props값을 저장 */
            // this : LifecycleUpdate 클래스
            /* this.state : 현재 클래스(LifecycleUpdate)에 state라는 property를 추가하고, 빈객체를 넣어준것임 */
            console.log("1. constructor() 호출");
        }

        static getDerivedStateFromProps(props, state){
            console.log("2. getDerivedStateFromProps() 호출 : "+ props.prop_value);
            console.log(state);
            return {tmp_state : props.prop_value}; // 반환되는 값이 state에 바로 적용되있을것.
                                                   // {tmp_state : props.prop_value} == state
        }
        
        render(){
            console.log("3. render함수 호출");
            console.log(this.state);

            // return형식 이상함-> JSX문법
            return( 
                <h2>[render 함수 호출]</h2>
            )
        }

        componentDidMount(){
            console.log("4. componentDidMount 호출됨");
            console.log("5. tmp_state : "+ this.state.tmp_state);
            this.setState({tmp_state2:true});
            /* 현재 state에 tmp_state2 객체를 추가 후 render메서드 호출 */
        }
        
        shouldComponentUpdate(props, state){
            console.log("6. shouldComponentUpdate 호출 / tmp_state2 = "+state.tmp_state2);
            //return state.tmp_state2; // 랜더함수 호출함
            return false; // false : 랜더함수 호출안함
        }
    }
    
    /* 
        작성한 js파일을 내보내는 방법
        1.
        export default 개체명; // default : 현재 모듈안에는 개체가 단 한개만 있음을 의미
        export {클래스(함수) or 상수, or 배열, 함수1, 함수2, ....}
    */
    export default LifecycleUpdate;
    //export {LifecycleUpdate};