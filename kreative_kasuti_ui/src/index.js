import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import LandingPage from './pages/landing_page';
import GalleryPage from './pages/gallery_page';
import ContactPage from './pages/contact_page';
import ShopPage from './pages/shop_page';

ReactDOM.render(
  <Router>
    <div className='bg-black flex flex-col min-h-screen'>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer/>
    </div>
  </Router>,
  document.getElementById('root')
);
