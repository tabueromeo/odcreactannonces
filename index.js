const express = require('express')
const path = require('path')
const config = require('./config/config');
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000



mongoose.connect(config.CURRENT_BD_PATH).then(() => {
  console.log('Connected to mongoDB')
}).catch(e => {
  console.log('Error while DB connecting');
  console.log(e);
});

app.use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.send(" Real time POS3 web app running."))


  //Définition des CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});






app.listen(PORT, () => console.log(`Listening on ${ PORT }`))