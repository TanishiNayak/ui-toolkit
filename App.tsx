import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import TSXCode from './TSXCode';
import CSSCode from './CSSCode';

import './App.css';

const App: React.FC = () => {
  const [isTSX, setIsTSX] = useState(true);

  const handleToggle = () => {
    setIsTSX((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>Toggle Switch Example</h1>
      <ToggleSwitch isChecked={isTSX} onToggle={handleToggle} />
      {isTSX ? <TSXCode /> : <CSSCode />}
    </div>
  );
};

export default App;