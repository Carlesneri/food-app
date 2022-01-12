export default async function handler (req, res) {
  const URL = `https://api.spoonacular.com/recipes/${req.query.ID}/information?includeInstructions=true&apiKey=${process.env.SPOONACULAR_API_KEY}`
  const response = await fetch(URL)
  const recipe = await response.json()
  recipe.status === 'failure' && (recipe = null)

  res.status(200).json({
    recipe: recipe || null
  })
}