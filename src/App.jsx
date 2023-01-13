import './index.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Layout from './components/homepage';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      < Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Layout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
