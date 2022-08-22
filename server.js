// Denpendents
const express = require('express');
const path = require('path');
const fs = require("fs");
const api = require('./routes/apiroutes.js');
const homeroutes = require('./routes/view');

// Server set up
const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiroutes);
// Html link to Url pathing
app.use(express.static('public'))
app.get()

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);















app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
);