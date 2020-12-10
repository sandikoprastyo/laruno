const express = require('express');
const router = express.Router();
require('dotenv/config');
const { init } = require('rajaongkir-node-js');
const request = init(process.env.TOKEN, 'starter');

//!provinsi all
router.get('/provinsi', function (req, res) {
  const province = request.get('/province');
  province.then((prov) => {
    let js = JSON.parse(prov);
    res.send(js);
  });
});

//!kota id
router.get('/kota/:id', function (req, res) {
  const allCityInProvince = request.get(`/city?&province=${req.params.id}`);
  allCityInProvince.then((city) => {
    let citi = JSON.parse(city);
    res.send(citi);
  });
});

//!cost
router.post('/ongkir', function (req, res) {
  const form = req.body;
  const data = {
    origin: form.origin,
    destination: form.destination,
    weight: form.weight,
    courier: form.courier,
  };
  const cost = request.post('cost', data);
  cost.then((cst) => {
    res.send(cst);
  });
});
module.exports = router;
