import React from 'react';
import './App.css';
import MemeGenerator from './components/MemeGeneratorContainer';
import Header from './components/HeaderComponent'

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
