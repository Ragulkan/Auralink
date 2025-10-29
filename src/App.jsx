// App.jsx
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header.jsx';
import Slider from './Slider.jsx';
import Footer from './Footer.jsx';
import Nerdathon from './Nerdathon.jsx';

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* Add padding-top equal to header height (e.g., h-20 for 80px) */}
      <div className="pt-20">
        <Routes>
          {/* Default route (Home) */}
          <Route path="/" element={<Slider />} />

          {/* Contact route */}
          <Route path="/nerdathon" element={<Nerdathon />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
