const express = require('express');
const products = require('../models/products');

const app = express.Router();

app
  .get('/', (req, res, next) => {
    products.getProducts()
      .then(x => res.status(200).send(x))
      .catch(next);
    // res.status(200).send(products.getProducts());
  })
  .get('/:id', (req, res, next) => {
    products.getProduct(req.params.id)
      .then(product => {
        if (product) {
          res.status(200).send(product);
        } else {
          res.status(200).send("Product not found");
        }
      })
      .catch(next);
    // // res.send(req.params.id);
    // const product = products.getProduct(+req.params.id);
    // if(product){
    //   res.status(200).send(product);
    // } else {
    //   res.status(200).send("Product not found");
    // }
  })

module.exports = app;