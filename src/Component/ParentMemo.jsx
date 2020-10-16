import React, { Component } from 'react';
import Memo from './Memo'

export default class ParentMemo extends Component {
    constructor(){
        super();
        this.state = {
            name: 5
        }

    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({ name: this.state.name + 1 })
        }, 2000)
    }
    render() {
        return (
            <div>
                <Memo name={this.state.name} />
            </div>
        )
    }
}
