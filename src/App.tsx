import React from 'react';
import NavBar from './components/navbar';
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Footer from './components/footer';
import AllBrands from './pages/brands';
import HotCars from './pages/hotCars';
import AllCars from './pages/allCars';
import AllElectricCars from './pages/electricCars';
import SingleCar from './pages/single-car';
import ScrollToTop from './components/scrollToTop';
import Login from './pages/login';
import Admin from './pages/admin';
import Logout from './functions/logout';
import CompareCars from './pages/compareCars';

function App() {
  return (<>
      <React.Fragment>
          <BrowserRouter>
              <ScrollToTop />
                <Routes>
                  <Route path="/" element={<><NavBar/><Home /><Footer/></>} />
                  <Route path="/login" element={<><NavBar/><Login /><Footer/></>} />
                  <Route path="/logout" element={<Logout/>}/>
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/all-brands" element={<><NavBar/><AllBrands /><Footer/></>} />
                  <Route path="/hot-cars" element={<><NavBar/><HotCars /><Footer/></>} />
                  <Route path="/all-cars" element={<><NavBar/><AllCars /><Footer/></>} />
                  <Route path="/all-electric-cars" element={<><NavBar/><AllElectricCars /><Footer/></>} />
                  <Route path="/compare-cars" element={<><NavBar/><CompareCars /><Footer/></>} />
                  <Route path="/get-car/:id" element={<><NavBar/><SingleCar /><Footer/></>} />
                </Routes>
          </BrowserRouter>
        </React.Fragment>
    </>
  );
}

export default App;
