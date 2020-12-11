import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbars from './components/Navbars/Navbars';
import { withRouter } from 'react-router-dom';
import Videos from './components/Video/Video';
import { RootContext } from './Routers';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App(props) {
  // eslint-disable-next-line no-unused-vars
  /*  const [data, setData] = useState({
    data: {
      origin: '',
      destination: '',
      weight: '',
      courier: '',
    },
  });
  const [hasil, setHasil] = useState([]); */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*  axios
      .post('https://nameless-shore-41059.herokuapp.com/ongkir', {
        origin: data.origin,
        destination: data.destination,
        weight: data.weight,
        courier: data.courier,
      })
      .then((response) => {
        console.log([response.data.rajaongkir.results[0].costs]);
        setHasil([response.data.rajaongkir.results[0].costs]);
      })
      .then(() => {
        console.log(hasil);
      })
      .catch(function (error) {
        console.log(error);
      }); */
    props.history.push('/checkout');
  };

  return (
    <RootContext.Consumer>
      {(value) => {
        return (
          <div className='App'>
            <Navbars />
            <Header />
            <Videos />
            <div className='form-data'>
              <h1 className='title-register'>Check ongkir</h1>
              <hr className='hr' />
              <Container>
                <Row>
                  <Col></Col>
                  <Col className='form-input' lg={6} md={6} sm={12} xs={12}>
                    <Form className='Form' onSubmit={handleSubmit}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Nama</Form.Label>
                        <Form.Control
                          type='text'
                          value={value.name}
                          placeholder='name..'
                          onChange={value.handleName}
                        />
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type='email'
                          value={value.email}
                          placeholder='email..'
                          onChange={value.handleEmail}
                        />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type='number'
                          value={value.phone}
                          placeholder='phone..'
                          onChange={value.handlePhone}
                        />

                        <Form.Label>Provinsi Asal</Form.Label>
                        <Form.Control
                          as='select'
                          custom
                          onChange={value.handleProvinsiAsal}
                        >
                          {value.provinsiTujuan.map((prov, i) => (
                            <option key={i} value={prov.province_id}>
                              {prov.province}
                            </option>
                          ))}
                        </Form.Control>

                        <Form.Label>Kota Asal</Form.Label>
                        <Form.Control
                          as='select'
                          custom
                          onChange={value.handleKotaAsal}
                        >
                          {value.kotaAsal.map((kota, i) => (
                            <option key={i} value={kota.city_id}>
                              {kota.type}
                              {kota.city_name}
                            </option>
                          ))}
                        </Form.Control>

                        <Form.Label>Tujuan Provinsi</Form.Label>
                        <Form.Control
                          as='select'
                          custom
                          onChange={value.handleProvinsiTujuan}
                        >
                          {value.provinsiTujuan.map((prov, i) => (
                            <option key={i} value={prov.province_id}>
                              {prov.province}
                            </option>
                          ))}
                        </Form.Control>

                        <Form.Label>Tujuan Kota</Form.Label>
                        <Form.Control
                          as='select'
                          custom
                          onChange={value.handleKota}
                        >
                          {value.kotaTujuan.map((kota, i) => (
                            <option key={i} value={kota.city_id}>
                              {kota.type}
                              {kota.city_name}
                            </option>
                          ))}
                        </Form.Control>

                        <Form.Label>Berat</Form.Label>
                        <Form.Control
                          type='number'
                          placeholder='1000 gram...'
                          onChange={value.handleBerat}
                        />

                        <Form.Label>Kurir</Form.Label>
                        <Form.Control
                          as='select'
                          onChange={value.handleKurir}
                          required
                        >
                          <option value='undef'>Select kurir</option>
                          <option value='jne'>JNE</option>
                          <option value='pos'>POS</option>
                          <option value='tiki'>TIKI</option>
                        </Form.Control>
                      </Form.Group>

                      <Button variant='primary' type='submit'>
                        Submit
                      </Button>
                    </Form>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>
            <Footer />
          </div>
        );
      }}
    </RootContext.Consumer>
  );
}

export default withRouter(App);
