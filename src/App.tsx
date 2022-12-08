import React from 'react';
import NavBar from './components/navbar';
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            <Footer/>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
