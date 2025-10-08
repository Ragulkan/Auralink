// App.jsx
import React from 'react';
import Header from './Header.jsx';
import Slider from './Slider.jsx';
import Footer from './Footer.jsx';


function App() {
  return (
    <div>
      <Header />
      {/* Add padding-top equal to header height (e.g., h-20 for 80px) */}
      <div className="pt-20">
        <Slider />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

