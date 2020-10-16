import React from 'react';

function Memo({name}){
    console.log('this is memo Parent render')
    return(
        <>
         <p>Name: { name } </p>
        </>
    );
}

export default React.memo(Memo);
