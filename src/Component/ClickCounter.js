import React, { Component } from 'react';
import PrevCounter from './HigherOrder';

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <p> {this.props.counter} </p>
                <button onClick={ () => this.props.increment() } >Click Counter</button>
            </div>
        )
    }
}
export default PrevCounter(ClickCounter);