export default async function randomRecipe(req, res) {

  const URL = `https://api.spoonacular.com/recipes/random?number=1&tags=mediterranean&apiKey=${process.env.SPOONACULAR_API_KEY}`

  const response = await fetch(URL)
  const { recipes } = await response.json()

  res.status(200).json({
    recipes
  })
}