const express = require('express')
const app = express()

const productsController = require('./controllers/products');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  next();
})
app.use('/',express.static('./client/dist'));

app.get('/', (req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World');

  res.status(200).send('Hello World');
})
  .get('/error', (req,res) => {
    SSS.PORT;
  })
  .use('/api/v1/products', productsController);

app.get('*',(req,res) => {
  res.sendFile('index.html',{root: './client/dist'});
})

app.use((err,req,res,next)=>{
  console.log(err);
  res.status(err.httpCode ?? 500).send({
    message: err.msg ?? 'Something broke!',
    status: err.httpCode ?? 500
  });
})
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

function nn(paramName) {

}
const nnn = function (paramName) {

}

const obj = {
  vvv() {

  }
}
const fatArrow = x => x * 2;