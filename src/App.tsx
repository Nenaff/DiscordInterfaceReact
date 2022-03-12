import React from 'react';
import logo from './logo.svg';
import './global.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Settings from './settings/settings';
import Index from './app/app';
import Navigation from './navigation/navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigation/>}/>   
          <Route path="/channel/:id" element={<Index/>}/>    
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
