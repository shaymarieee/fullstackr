const express = require('express');
const bodyParser = require('body-parser');
//import controllers

const app = express();
const PORT = 1234;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/public'));

app.get('/', (req, res) => {
  res.send('WHADDUP BITCH?!?!!??')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});