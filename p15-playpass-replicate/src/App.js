import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Why from './components/Why'
import Email from './components/Email'
import Testimonial from './components/Testimonial'
import HowItWorks from './components/HowItWorks'
import FindActivities from './components/FindActivities'
import Footer from './components/Footer'
import playallday from './image/play-all-day.b61d6b53.jpg'

function App() {
  return (
    <div className="homepage">
      <Nav />
      <Hero />
      <Why />
      <Email />
      <Testimonial />
      <HowItWorks />
      <FindActivities />
      <Footer />
    </div>
  );
}

export default App;
