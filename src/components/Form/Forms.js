/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Forms.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { RootContext } from '../../Routers';

const Forms = (props) => {
  const [nama, setNama] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [hasil, setHasil] = useState([]);
  const [kotaAsal, setKotaAsal] = useState([]);
  const [kotaTujuan, setKotaTujuan] = useState([]);
  const [provinsiTujuan, setProvinsiTujuan] = useState([]);
  //const [error, setError] = useState(null);
  const [data, setData] = useState({
    data: {
      origin: '',
      destination: '',
      weight: '',
      courier: '',
    },
  });

  // note qs: {id: '457', province: '3'},
  React.useEffect(() => {
    axios
      .get('https://nameless-shore-41059.herokuapp.com/provinsi')
      .then((res) => {
        setProvinsiTujuan(res.data.rajaongkir.results);
      })
      .catch((error) => {
        console.log(`periksa koneksi anda ${error}`);
      });
  }, []);

  /* //!Asal */
  const handleProvinsiAsal = (e) => {
    const id = e.target.value;
    axios
      .get(`https://nameless-shore-41059.herokuapp.com/kota/${id}`)
      .then((res) => {
        setKotaAsal(res.data.rajaongkir.results);
      })
      .catch((error) => {
        console.log(`periksa koneksi anda ${error}`);
      });
  };

  const handleKotaAsal = (e) => {
    const datas = data;
    const value = e.target.value;
    datas['origin'] = value;
  };

  /* //!Tujuan  */
  const handleProvinsiTujuan = (e) => {
    const id = e.target.value;
    axios
      .get(`https://nameless-shore-41059.herokuapp.com/kota/${id}`)
      .then((res) => {
        setKotaTujuan(res.data.rajaongkir.results);
      })
      .catch((error) => {
        console.log(`periksa koneksi anda ${error}`);
      });
  };

  const handleKota = (e) => {
    //setData['destination'](e.target.value);
    const datas = data;
    const value = e.target.value;
    datas['destination'] = value;
  };

  const handleBerat = (e) => {
    const datas = data;
    const value = e.target.value;
    datas['weight'] = value;
  };

  const handleKurir = (e) => {
    const datas = data;
    const value = e.target.value;
    datas['courier'] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
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
      });
    props.history.push('/checkout');
  };

  return (
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
                <Form.Control type='text' placeholder='nama..' />
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='email..' />
                <Form.Label>Phone</Form.Label>
                <Form.Control type='number' placeholder='phone..' />

                {/*  //!Provinsi asal */}
                <Form.Label>Provinsi Asal</Form.Label>
                <Form.Control as='select' custom onChange={handleProvinsiAsal}>
                  {provinsiTujuan.map((prov, i) => (
                    <option key={i} value={prov.province_id}>
                      {prov.province}
                    </option>
                  ))}
                </Form.Control>

                {/*  //!Kota Asal */}
                <Form.Label>Kota Asal</Form.Label>
                <Form.Control as='select' custom onChange={handleKotaAsal}>
                  {kotaAsal.map((kota, i) => (
                    <option key={i} value={kota.city_id}>
                      {kota.type}
                      {kota.city_name}
                    </option>
                  ))}
                </Form.Control>

                {/*  //!Provinsi tujuan */}
                <Form.Label>Tujuan Provinsi</Form.Label>
                <Form.Control
                  as='select'
                  custom
                  onChange={handleProvinsiTujuan}
                >
                  {provinsiTujuan.map((prov, i) => (
                    <option key={i} value={prov.province_id}>
                      {prov.province}
                    </option>
                  ))}
                </Form.Control>

                {/*  //!Kota tujuan */}
                <Form.Label>Tujuan Kota</Form.Label>
                <Form.Control as='select' custom onChange={handleKota}>
                  {kotaTujuan.map((kota, i) => (
                    <option key={i} value={kota.city_id}>
                      {kota.type}
                      {kota.city_name}
                    </option>
                  ))}
                </Form.Control>

                {/* //!berat */}
                <Form.Label>Berat</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='1000 gram...'
                  onChange={handleBerat}
                />

                {/* //!kurir */}
                <Form.Label>Kurir</Form.Label>
                <Form.Control as='select' onChange={handleKurir} required>
                  <option value='undef'>Select kurir</option>
                  <option value='jne'>JNE</option>
                  <option value='pos'>POS</option>
                  <option value='tiki'>TIKI</option>
                </Form.Control>
              </Form.Group>

              {/* //!submit */}
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Forms);
