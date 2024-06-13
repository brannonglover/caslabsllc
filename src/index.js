import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Customers from './pages/Customers';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Samples from './pages/Samples';
import Certification from './pages/Certification';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="customers" element={<Customers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="samples" element={<Samples />} />
          <Route path="certification" element={<Certification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);