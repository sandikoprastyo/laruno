/* eslint-disable no-unused-vars */
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Checkout from './pages/Checkout/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';

export const RootContext = createContext();
const Provider = RootContext.Provider;

function Routers() {
  const [nama, setNama] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
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
  const [hasil, setHasil] = useState({
    service: 'OKE',
    description: 'Ongkos Kirim Ekonomis',
    cost: 'tes',
  });

  const handleClickCheckOut = () => {
    alert('tes');
  };

  return (
    <Provider value={(hasil, handleClickCheckOut)}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default Routers;
