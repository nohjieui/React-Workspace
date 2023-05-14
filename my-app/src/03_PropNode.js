import { Component } from "react";

class PropNode extends Component{

    render(){
        return(
            <div style={{padding:"0px"}}>
                {console.log(this.props)};
                {this.props.children}
                {/* {this.props.children}
                    props : 부모로부터 전달받은 객체형태의 데이터로
                    그안에 있는 children 이라는 property에 접근해서 이자리에 뿌려주고 있음
                    children : 내 부모요소(<APP2/>로부터 전달받은 자식노드를 꺼내쓰는 방법 */}
            </div>
        )
    }

}
/*
    html요소 노드를 전달할때에는 children 으로 꺼내오면 되고
    (App2.js에서 <PropNode>, 현재 03_PropNode.js에서 {this.props.children})
    객체 형태의 데이터를 전달할때에는 시작태그에 속성, 속성값형태인 key=value 데이터 제시하면
    데이터들이 모아져서 props라는 이름의 key값으로 전달됨
    (App.js에서 <PropsDatatype>에 적용한 방법)

*/
export default PropNode;