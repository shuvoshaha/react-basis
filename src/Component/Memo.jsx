import React from 'react';

function Memo({name}){
    console.log('this is memo')
    return(
        <>
         {name} 
        </>
    );
}

export default React.memo(Memo);
