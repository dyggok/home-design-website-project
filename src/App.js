import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';

function App() {

  return (
    <div className="App">
        <Navbar/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
          </Routes>
    </div>
  );
}

export default App;
