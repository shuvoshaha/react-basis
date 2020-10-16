import React, { Component } from 'react'

export default class Ref extends Component {
    constructor(){
        super();
        this.state = {
            name: ''
        }
         this.inputRef = React.createRef();
         
    }
    componentDidMount(){
        console.log(this.inputRef)
    }
    onChangeHandler(){

    }
    render() {
        return (
            <>
            <p>{this.state.name} </p>
               <input className="text" type="text" ref={this.inputRef} onChange= {this.onChangeHandler} />
               <button onClick={ () => this.setState({ name: this.inputRef.current.value }) } >Submit</button> 
            </>
        )
    }
}
