const express = require('express')
const app = express()

const productsController = require('./controllers/products');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World');

  res.status(200).send('Hello World');
})
.use('/api/v1/products', productsController)
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

function nn(paramName){

}
const nnn = function (paramName) {

}

const obj = {
  vvv(){

  }
}
const fatArrow = x => x * 2;