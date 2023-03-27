import './App.css';
import HomePage from './Pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './helper/Header';
import Auth from './Pages/Auth';
import { useSelector } from 'react-redux';
import { store } from '../src/store/store';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
