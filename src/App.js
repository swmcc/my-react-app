import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Department} from './components/Department'
import {Employee} from './components/Employee' 
import {Home} from './components/Home'

function App() {
  return (
    <div className="container">
      <Employee />
    </div>
  );
}

export default App;
