import React from 'react';
import './index.css';
import Footer from '../../components/Footer/Footer';
import Navbars from '../../components/Navbars/Navbars';
import { RootContext } from '../../Routers';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

function Checkout() {
  const handleClick = () => {
    alert('Payment');
  };

  return (
    <RootContext.Consumer>
      {(value) => {
        //result jika state hasil ada
        const Result = () => {
          return value.hasil.map((r, i) => (
            <tr key={i}>
              <td>{r.service}</td>
              <td>{r.description}</td>
              <td>{r.cost[0].value}</td>
              <td>{r.cost[0].etd}</td>
            </tr>
          ));
        };

        //result jika state hasil undefined
        const ResultHasilUndefined = () => {
          return <h1>GAGAl AMBIL DATA</h1>;
        };

        console.log(value.hasil);
        return (
          <div className='checkout'>
            <Navbars />
            <h1 className='title-checkout'>Thank you</h1>
            <div className='container-thankyou'>
              <p>Nama : {value.name}</p>
              <p>Email : {value.email}</p>
              <p>Phone : {value.phone}</p>
            </div>
            <hr />
            <div className='hasil-submit'>
              <Table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>description</th>
                    <th>Ongkos</th>
                    <th>ETD</th>
                  </tr>
                </thead>
                <tbody>
                  {value.hasil === Object ? (
                    <ResultHasilUndefined />
                  ) : (
                    <Result />
                  )}
                </tbody>
              </Table>
            </div>
            <br />
            <br />
            <br />
            <Link to='/'>
              <Button variant='danger'>Back</Button>
            </Link>
            <Button variant='info' onClick={handleClick}>
              Payment
            </Button>
            <br />
            <br />
            <Footer />
          </div>
        );
      }}
    </RootContext.Consumer>
  );
}

export default Checkout;
