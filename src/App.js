import React from 'react';
import './App.css';
import './App.scss'
import { useSelector } from 'react-redux';

import Header from './Components/Header/Header';
import Main from './Components/Main';
function App() {
  const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`App ${darkTheme ? 'dark-theme' : ''}`}>
     <Header />
     <Main />
    
    </div>
  );
}

export default App;
