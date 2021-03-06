/* eslint-disable no-unused-vars */
import React, { useState, createContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import App from './App';
import Checkout from './pages/Checkout/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import axios from 'axios';

export const RootContext = createContext();
const Provider = RootContext.Provider;

function Routers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [kotaAsal, setKotaAsal] = useState([]);
  const [kotaTujuan, setKotaTujuan] = useState([]);
  const [provinsiTujuan, setProvinsiTujuan] = useState([]);
  const [hasil, setHasil] = useState(undefined);
  const [isloading, setLoading] = useState(false);
  const [data, setData] = useState({
    data: {
      origin: '',
      destination: '',
      weight: '',
      courier: '',
    },
  });

  useEffect(() => {
    axios
      .get('https://nameless-shore-41059.herokuapp.com/provinsi')
      .then((res) => {
        setProvinsiTujuan(res.data.rajaongkir.results);
      })
      .catch((error) => {
        console.log(`periksa koneksi anda ${error}`);
      });
  }, []);

  //function
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);

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
    setLoading(true);
    axios
      .post('https://nameless-shore-41059.herokuapp.com/ongkir', {
        origin: data.origin,
        destination: data.destination,
        weight: data.weight,
        courier: data.courier,
      })
      .then((response) => {
        const a = response.data.rajaongkir.results[0].costs;
        setHasil(a);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
    /* 
      not use but need to refence
     window.location.replace('/checkout'); */
  };

  return (
    <Provider
      value={{
        name,
        email,
        phone,
        hasil,
        kotaAsal,
        kotaTujuan,
        provinsiTujuan,
        handleName,
        isloading,
        handleEmail,
        handlePhone,
        handleSubmit,
        handleProvinsiAsal,
        handleKotaAsal,
        handleProvinsiTujuan,
        handleKota,
        handleBerat,
        handleKurir,
      }}
    >
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default Routers;
