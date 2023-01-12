const express = require('express');
const app = express();
const recipes = require('./data/recipe_data.js')
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Food For Thought API';
app.locals.recipes = recipes 

app.get('/', (request, response) => {
  response.send(`Here's some Food For Thought`);
});

app.get('/api/v1/recipes', (request, response) => {
  const recipes = app.locals.recipes
  response.status(200).json(recipes)
});

app.get('/api/v1/recipes/:id', (request, response) => {
  const { id } = request.params
  const recipes = app.locals.recipes
  const singleRecipe = recipes.find(data => data.id === parseInt(id))
  if (!singleRecipe) {
    return response.status(404).json({message: `Sorry, no recipes found`})
  }
  return response.status(200).json(singleRecipe)
})

app.post('/api/v1/recipes', (request, response) => {
  const id = Date.now();
  const newRecipe = request.body;
  const { name, image, ingredients, instructions } = newRecipe

  for(let requiredParameter of ['name', 'image', 'ingredients', 'instructions'])
    if (!newRecipe[requiredParameter]) {
      response.status(422).send({ error: ` Expected format: {name: <String>, image: <String>, ingredients: <Array>, instructions: <Array>} Missing ${ requiredParameter }` })
    }

  app.locals.recipes.push({ id, name, image, ingredients, instructions });

  response.status(201).json({ id, name, image, ingredients, instructions });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});