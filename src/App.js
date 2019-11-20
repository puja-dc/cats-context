import React, { useReducer } from 'react';
import './App.css';
import Activity from './components/Activity';

import { StateProvider } from './context';

function App() {
  const initialState = {
    name: 'Itty Bitty',
    activity: 'eating'
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeActivity':
        return {
          ...state,
          activity: action.activity
        };
      default:
        return state;
    }
  };

  return (
    <div className='App'>
      <StateProvider value={useReducer(reducer, initialState)}>
        <Activity />
      </StateProvider>
    </div>
  );
}

export default App;
