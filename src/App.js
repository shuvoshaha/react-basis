import React from 'react';
import './App.css';
import Memo from './Component/ParentMemo';
import Ref from './Component/Ref';
import Portal from './Component/Portal'

function App() {
  return (
    <div className="App">
     <Memo />
     <Ref />
     <Portal />
    </div>
  );
}

export default App;
