import React from 'react';
import NavBar from './components/navbar';
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'react-image-lightbox/style.css';
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
import Search from './pages/search';
import ContactUs from './pages/static/contactUs';
import TermsOfService from './pages/static/termsOfService';
import PrivacyPolicy from './pages/static/privacyPolicy';
import Disclaimer from './pages/static/disclaimer';
import Dmca from './pages/static/dmca';
import AdminCompare from './pages/adminCompare';
import AllHybridCars from './pages/hybridCars';
import AllCompares from './pages/compareCarsList';
import BrandModels from './pages/modelBrand';
import GenerationModel from './pages/generationModel';
import GenModelCars from './pages/genModelcars';
import CompareTwoCars from './pages/compCarS';
import Scrapping from './pages/adminScrap';

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
                  <Route path="/admin-Compare" element={<AdminCompare />} />
                  <Route path="/scrapping" element={<Scrapping />} />
                  <Route path="/all-brands" element={<><NavBar/><AllBrands /><Footer/></>} />
                  <Route path="/brands-models/:brand" element={<><NavBar/><BrandModels /><Footer/></>} />
                  <Route path="/brands-models-generation/:brand/:model" element={<><NavBar/><GenerationModel /><Footer/></>} />
                  <Route path="/brands-models-generation-cars/:brand/:model/:gen" element={<><NavBar/><GenModelCars /><Footer/></>} />
                  <Route path="/hot-cars" element={<><NavBar/><HotCars /><Footer/></>} />
                  <Route path="/all-cars" element={<><NavBar/><AllCars /><Footer/></>} />
                  <Route path="/search/:key" element={<><NavBar/><Search /><Footer/></>} />
                  <Route path="/all-electric-cars" element={<><NavBar/><AllElectricCars /><Footer/></>} />
                  <Route path="/all-hybrid-cars" element={<><NavBar/><AllHybridCars /><Footer/></>} />
                  <Route path="/all-compare-cars" element={<><NavBar/><AllCompares /><Footer/></>} />
                  <Route path="/compare-cars" element={<><NavBar/><CompareCars   /><Footer/></>} />
                  <Route path="/compare-two-cars/:id1/:id2" element={<><NavBar/><CompareTwoCars   /><Footer/></>} />
                  <Route path="/get-car/:id/:name" element={<><NavBar/><SingleCar /><Footer/></>} />
                  <Route path="/contact-us" element={<><NavBar/><ContactUs/><Footer/></>} />
                  <Route path="/terms-of-service" element={<><NavBar/><TermsOfService/><Footer/></>} />
                  <Route path="/privacy-policy" element={<><NavBar/><PrivacyPolicy/><Footer/></>} />
                  <Route path="/disclaimer" element={<><NavBar/><Disclaimer/><Footer/></>} />
                  <Route path="/dmca" element={<><NavBar/><Dmca/><Footer/></>} />
                  
                </Routes>
          </BrowserRouter>
        </React.Fragment>
    </>
  );
}

export default App;
