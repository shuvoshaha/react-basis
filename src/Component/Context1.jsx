import React from 'react';
import { UserProvider } from './Context';
import ContextData from './Context2'

const Context1 = () => {
    return (
        <>
            <UserProvider value="SKS Shaha">
                <ContextData />
            </UserProvider>
        </>
    )
}

export default Context1
