import { Component, PureComponent } from "react";
import {shallowEqualArrays, shallowEqualObjcets} from 'shallow-equal';

/*
    1. PureComponent?
    class형 컴포넌트는 Component와 PureComponent가 있음.

    두 함수 모두 props와 state의 변경에 따라 render함수를 호출하는데 변경에 대한 기준이 약간 다름
    
    Component에서는 setState함수 호출 시 내부적으로 변경하고자하는 state의 값이 같더라도,
    변경으로 간주하고 render()함수를 호출하였음

    PureComponent에서는 바꿀 값 자체를 실제로 비교하여 값이 동일한 경우 변경되지 않았다고 간주하고
    render함수를 호출하지 않음

    Component와 비교하여 불필요한 화면 변환을 실행하지 않으므로 페이지 성능을 향상시킬 수 있다.
 */

class Pure extends PureComponent{
    /* 1. PureComponent 테스트 */
    constructor(props){
        super(props);
        this.state = {
            StateString : 'react',
            StateArray : ['react'],
            StateObject : {reace:'react'}
        }
    }

    stateChange = (flag) =>{
        if(flag == 'string'){
            this.setState({StateString : 'react2'});
        }else if(flag == 'array'){

        }else{

        }
    }




    render(){
        console.log("render 호출");
        return(
            <div style={{padding:"0px"}}>
                <button onClick={()=> this.stateChange('string')}>클릭</button>
                <button onClick={()=> this.stateChange('array')}>클릭</button>
                <button onClick={()=> this.stateChange('object')}>클릭</button>
                state ::: StateString : {this.state.StateString}
                state ::: StateArray : {this.state.StateArray.toString()}
                state ::: StateObject : {JSON.stringify(this.state.StateObject)}
            </div>
            
        )
    }


}

export {Pure};