import React from 'react';
import Terminal from './components/Terminal';
import { Line } from './types/terminal';
import './App.css';

const App: React.FC = () => {
  const initialLines: Line[] = [
    { text: "Initializing virtual interface...", type: "animated" },
    { text: "Loading kernel modules...", type: "animated" },
    { text: "Establishing encrypted link...", type: "animated" },
    { text: "Authenticating session...", type: "animated" },
    { text: "Welcome to Gridlock CLI.", type: "animated" },
  ];

  return (
    <div className="App">
      <Terminal lines={initialLines} />
    </div>
  );
}

export default App;
