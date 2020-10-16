import React from 'react';
import ReactDOM from 'react-dom';

const Portal = () => {
    return ReactDOM.createPortal(
        <>
            <h1> This is React Portal </h1>,
           
        </>,
         document.getElementById('portal')
    )
}

export default Portal
