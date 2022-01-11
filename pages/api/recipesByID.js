export default async function handler (req, res) {

  console.log({ ID: req.query.ID })
  
  const URL = `https://api.spoonacular.com/recipes/${req.query.ID}/information?includeInstructions=true&apiKey=${process.env.SPOONACULAR_API_KEY}`

  const response = await fetch(URL)
  
  const recipe = await response.json()

  console.log({ recipe })

  res.status(200).json({
    recipe: recipe || null
  })
}