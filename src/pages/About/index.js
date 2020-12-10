import React from 'react';
import './index.css';
import Footer from '../../components/Footer/Footer';
import Navbars from '../../components/Navbars/Navbars';
import Header from '../../components/Header/Header';

function About() {
  return (
    <div className='About'>
      <Navbars />
      <Header />
      <h1>About</h1>
      <Footer />
    </div>
  );
}

export default About;
