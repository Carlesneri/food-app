export async function getSpoonacularIngredients({ query }: { query: string }) {
	const URL = `https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=5&apiKey=${process.env.SPOONACULAR_API_KEY}`

	const response = await fetch(URL)

	if (!response.ok) {
		throw new Error("Failed to fetch recipes")
	}

	const ingredients = await response.json()

	return ingredients
}
