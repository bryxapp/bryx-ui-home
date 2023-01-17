import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from './components/Company/Company';
import Features from './components/Features/Features';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NotFound from './components/NotFound/NotFound';
import Support from './components/Support/Support';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/company" element={<Company />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
