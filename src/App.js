import React from 'react';
import Header from "./components/Header";
import "./styles.css";
import api from "./services/api";
import Main from './pages/main';

const App = () => {
  return ( 
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
