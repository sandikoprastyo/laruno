import React from 'react';
import './index.css';
import Footer from '../../components/Footer/Footer';
import Navbars from '../../components/Navbars/Navbars';
import { RootContext } from '../../Routers';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Checkout() {
  const handleClick = () => {
    alert('Payment');
  };

  return (
    <RootContext.Consumer>
      {(value) => {
        console.log(value.hasil);
        return (
          <div className='checkout'>
            <Navbars />
            <h1 className='title-checkout'>Thank you</h1>
            <div className='container-thankyou'>
              <p>Nama : {value.name}</p>
              <p>Email : {value.email}</p>
              <p>Phone : {value.phone}</p>

              <hr />
              {/* {value.hasil.map((hsl, i) => (
                <div className='hasil' key={i}>
                  <p>Service : {hsl.service}</p>
                  <p>Description : {hsl.description}</p>
                  <p>Cost : {hsl.cost}</p>
                </div>
              ))} */}

              <p>Service : {value.hasil.hasil.service}</p>
              <p>Description : {value.hasil.hasil.description}</p>
              <p>Cost : {value.hasil.hasil.cost}</p>
            </div>
            <Link to='/'>
              <Button variant='danger'>Back</Button>
            </Link>
            <Button variant='info' onClick={handleClick}>
              Payment
            </Button>
            <Footer />
          </div>
        );
      }}
    </RootContext.Consumer>
  );
}

export default Checkout;
