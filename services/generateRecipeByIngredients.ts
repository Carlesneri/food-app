export async function generateRecipeByIngredients({
	ingredients,
}: {
	ingredients: string[]
}) {
	const ingredientsString = ingredients.join(",+")

	const URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsString}&number=10&ranking=1&ignorePantry=true&fillIngredients=true&apiKey=${process.env.SPOONACULAR_API_KEY}`

	const response = await fetch(URL)
	if (!response.ok) {
		throw new Error("Failed to fetch recipes")
	}

	const data = await response.json()

	return data
}
