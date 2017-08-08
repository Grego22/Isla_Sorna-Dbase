const express = require('express');
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

const app = express();

app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')
// define a public folder
app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend:false}))
