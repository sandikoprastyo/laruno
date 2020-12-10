import React from 'react';
import './index.css';
import Footer from '../../components/Footer/Footer';
import Navbars from '../../components/Navbars/Navbars';
import { RootContext } from '../../Routers';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Checkout() {
  const handleClick = () => {};

  return (
    <RootContext.Consumer>
      {(value) => {
        return (
          <div className='checkout'>
            <Navbars />
            <h1 className='title-checkout'>Thank you</h1>
            <div className='container-thankyou'>
              <p>Service : {value.service}</p>
              <p>Description : {value.description}</p>
              <p>Cost : {value.cost}</p>
            </div>
            <Link to='/'>
              <Button variant='danger'>Back</Button>
            </Link>
            <Button variant='info' onClick={handleClick}>
              Click
            </Button>
            <Footer />
          </div>
        );
      }}
    </RootContext.Consumer>
  );
}

export default Checkout;
