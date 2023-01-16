import './index.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Layout from './components/homepage';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';
import Rooms from './pages/rooms/rooms';
import Aboutus from './pages/about-us/about-us';
import TermsCondition from './pages/terms&condition/terms&condition';
import Quickcontact from "./components/quick-contact/quick-contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      < Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Layout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/terms&condition' element={<TermsCondition />} />
        </Routes>
        <Footer />
        <Quickcontact />
      </Router>
    </>
  );
}

export default App;
