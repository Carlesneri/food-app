export default async function handler(req, res) {
	const recipe = await getRecipesByID(req.query.ID)
	res.status(200).json({
		recipe,
	})
}

export async function getRecipesByID(id) {
	const URL = `https://api.spoonacular.com/recipes/${id}/information?includeInstructions=true&apiKey=${process.env.SPOONACULAR_API_KEY}`
	const response = await fetch(URL)

	if (!response.ok) {
		return null
	}

	const recipe = await response.json()

	return recipe || null
}
