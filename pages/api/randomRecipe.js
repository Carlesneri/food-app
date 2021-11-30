export default async function randomRecipe(req, res) {

  const URL = `https://api.spoonacular.com/recipes/random?number=1&tags=${req.query.tags}&apiKey=${process.env.SPOONACULAR_API_KEY}`

  const response = await fetch(URL)
  const { recipes } = await response.json()

  res.status(200).json({
    recipe: recipes[0] || null
  })
}