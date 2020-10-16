import React from 'react';
import './App.css';
import Memo from './Component/ParentMemo';
import Ref from './Component/Ref';
import Portal from './Component/Portal';
import HoverCounter from './Component/HoverCounter';
import CickCounter from './Component/ClickCounter';
import Context from './Component/Context1'

function App() {
  return (
    <div className="App">
     <Memo />
     <Ref />
     <Portal />
     <CickCounter />
     <Context />
    </div>
  );
}

export default App;
