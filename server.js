const express = require('express');
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

const app = express();

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
// define a public folder
app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend:false}))

app.get('/', (req, res) => {
  res.render('index',myDinos[1]);
})

let myDinos = [
  {
    id:1,
    name: 'Triceratops',
    colors: ['blue', 'white'],
    diet: 'Herbivore',
    weight: 11000
  },{
    id:2,
    name: 'Velociraptor',
    colors: ['gold', 'green', 'white']
    diet: 'Carnivore'
    weight: 30
  },
  {
    id:3,
    name: 'T-Rex',
    colors: ['orange', 'white']
    diet: 'Carnivore',
    weight: 20000
  },
  {
    id:4,
   name: 'Pachycephalosaurus',
   colors: ['gold', 'silver', 'red'],
   diet: 'herbivore',
   weight: 1000
 }
]
console.log(myDinos)


app.listen(8888, () => {
  console.log('Must go faster!')
})
