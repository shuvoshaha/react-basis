import React, { Component } from 'react';
import RefForward from './RefForward'

export default class Ref extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            ref: ''
        }
         this.inputRef = React.createRef();
         this.refForward = React.createRef();
         
    }
    componentDidMount(){
        console.log(this.inputRef);
        console.log(this.state.ref);
    }
    onChangeHandler(){

    }
    render() {
        return (
            <>
            <p>{this.state.name} </p>
            <p> {this.state.ref} </p>
               <input className="text" type="text" ref={this.inputRef} onChange= {this.onChangeHandler} />
               <button onClick={ () => this.setState({ name: this.inputRef.current.value }) } >Submit</button> { <br />}
               <RefForward ref={this.refForward} />
               <button onClick={() => this.setState({ ref: this.refForward.current.value })} >Forward Ref</button>
            </>
        )
    }
}
