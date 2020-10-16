import React from 'react';
import { UserConsumer } from './Context'

const Context2 = () => {
    return (
        <div>
            <UserConsumer>
                {(value) => { return <div> <h1> {value} </h1></div>
                 
                
                }}
            </UserConsumer>
        </div>
    )
}

export default Context2
