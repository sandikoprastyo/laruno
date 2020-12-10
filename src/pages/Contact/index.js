import React from 'react';
import './index.css';
import Footer from '../../components/Footer/Footer';
import Navbars from '../../components/Navbars/Navbars';
import Header from '../../components/Header/Header';

function Contact() {
  return (
    <div className='Contact'>
      <Navbars />
      <Header />
      <h1>Contact</h1>
      <Footer />
    </div>
  );
}

export default Contact;
