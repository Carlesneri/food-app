export default async function randomRecipe(req, res) {
	const { tags } = req.query

	const recipe = await getRandomRecipe({ tags })

	res.status(200).json({
		recipe,
	})
}

export async function getRandomRecipe({ tags }) {
	const URL = `https://api.spoonacular.com/recipes/random?number=1&tags=${tags}&apiKey=${process.env.SPOONACULAR_API_KEY}`

	const response = await fetch(URL)
	const { recipes } = await response.json()

	return recipes[0] || null
}
