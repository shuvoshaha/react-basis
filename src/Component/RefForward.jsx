import React from 'react'

const RefForward = React.forwardRef((props, ref) => {
    return (
        <>
            <input type="text" ref= {ref} />
        </>
    )
})

export default RefForward;
