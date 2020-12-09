const express = require('express');
const router = express.Router();
require('dotenv/config');
const RajaOngkir = require('node-rajaongkir').Starter(process.env.TOKEN);

//!provinsi all
router.get('/provinsi', (req, res) => {
  RajaOngkir.getProvinces()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json({ messages: error });
    });
});

//!provinsi:id
router.get(`/provinsi/:id`, (req, res) => {
  const id = req.params.id;
  RajaOngkir.getProvince(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json({ messages: error });
    });
});
/* 
//!kota all
router.get(`/kota`, (req, res) => {
  RajaOngkir.getCities()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json({ messages: error });
    });
}); */

//!kota id
router.get('/kota/:id', (req, res) => {
  const id = req.params.id;
  RajaOngkir.getCity(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json({ messages: error });
    });
});

//!cost
router.post('/ongkir', (req, res) => {
  const form = req.body;
  const params = {
    origin: form.origin, // ID Kota atau Kabupaten Asal
    destination: form.destination, // ID Kota atau Kabupaten Tujuan
    weight: form.weight, // Berat Barang dalam gram (gr)
    courirer: form.courirer, // Kurir
  };
  RajaOngkir.getCosts(params)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json({ messages: error });
    });
});

module.exports = router;
