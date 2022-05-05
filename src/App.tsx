import React from 'react';
import './App.css';
import { Button } from '@chakra-ui/react'
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <div className="flex justify-center align-middle items-center min-h-[100vh]">
        <Question />
      </div>
    </div>
  );
}

export default App;
