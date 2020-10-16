import React from 'react'

const HigherOrder = (PrevComponent) => {
    class NewComponent extends React.Component{
        constructor(){
            super();
            this.state = {
                counter : 0,
            }
            this.increment = this.increment.bind(this);
        }
        increment() {
            this.setState(() => ({
                counter: this.state.counter +  1,
            }))
        }
        render(){
            return <PrevComponent counter={this.state.counter} increment={ this.increment } />

        }
    }
   
    return NewComponent;
}

export default HigherOrder
