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
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) => {
  res.render('index',fourDinos[1]);
})

let fourDinos = [
  {
    id:1,
    name: 'Triceratops',
    colors: ['blue', 'white'],
    diet: 'Herbivore',
    weight: '11000'
  },{
    id:2,
    name: 'Velociraptor',
    colors: ['gold', 'green', 'white'],
    diet: 'Carnivore',
    weight: '30'
  },
  {
    id:3,
    name: 'T-Rex',
    colors: ['orange', 'white'],
    diet: 'Carnivore',
    weight: '20000'
  },
  {
  id:4,
   name: 'Pachycephalosaurus',
   colors: ['gold', 'silver', 'red'],
   diet: 'herbivore',
   weight: '1000'
 }
]

app.get('/api/dinos/:id', (req, res) => {
  const dinosId = parseInt(req.params.id)
  // go my "database"
  const myDino  = fourDinos.find(bot => {
    return bot.id === dinosId
  })
  // this is how we retrun JSON from an endpoint
  res.json(myDino);
})

app.get('/api/dinos/:id/weight', (req, res) => {
  const dinosId = parseInt(req.params.id)
  // go my "database"
  const myDino  = fourDinos.find(bot => {
    return bot.id === dinosId
  })
  // this is how we retrun JSON from an endpoint
  res.json(myDino.weight)
})
//post a new Dinosaurs
app.post('/api/dinos', (req, res)=>{
  let newDino ={
    id:fourDinos.length +1,
    name: req.body.name,
    color: req.body.color,
    weight: req.body.weight,
  }
  fourDinos.push(newDino)
  res.json(newDino)
})

//delete a dino!
app.delete('/api/dinos/:id', (req, res) => {
    const dinoId = parseInt(req.params.id)
    fourDinos = fourDinos.filter(bot => bot.id !== dinoId)
    res.json(fourDinos)
})


app.listen(8888, () => {
  console.log('Must go faster!')
})
