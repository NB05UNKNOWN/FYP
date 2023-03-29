import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './helper/Header';
import Auth from './Pages/Auth';
import { useSelector } from 'react-redux';
import { store } from '../src/store/store';
import DashBoard from './Pages/DashBoard';
import Expenses from './Pages/Expenses';
import Incomes from './Pages/Incomes';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/income" element={<Incomes />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
