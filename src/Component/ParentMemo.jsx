import React, { Component } from 'react'

export default class ParentMemo extends Component {
    constructor(){
        super();
        this.state = {
            name: "sks"
        }
    }
    render() {
        return (
            <div>
                <Memo name={this.state.name} />
            </div>
        )
    }
}
