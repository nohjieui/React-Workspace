import {Component} from 'react';
import axios from 'axios';

class ReactComponent extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            ports : []
        }
    }

    componentDidMount(){
        axios.get("spring/test").then(
            response => {
                console.log(response);
                console.log(response.data);
                this.setState({ports : response.data})
            }
        )
    }

    render(){
        return(
            <h1>{this.state.ports[0]} ::: {this.state.ports[1]}</h1>
        )


    }
}

export {ReactComponent};