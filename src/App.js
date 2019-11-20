import React from 'react';
import './App.css';
import Activity from './components/Activity';

import { StateProvider } from './context';

function App() {
  const initialState = {
    name: 'Itty Bitty',
    activity: 'being cute'
  };

  return (
    <div className='App'>
      <StateProvider value={initialState}>
        <Activity />
      </StateProvider>
    </div>
  );
}

export default App;
