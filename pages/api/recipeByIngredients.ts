import type { NextApiRequest, NextApiResponse } from "next"
import { generateRecipeByIngredients } from "@/services/generateRecipeByIngredients"

interface IngredientsApiResponse {
	results: any
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IngredientsApiResponse>
) {
	const { ingredients } = req.query

	const splittedIngredients =
		typeof ingredients === "string"
			? ingredients.split(",")
			: ingredients[0].split(",")

	const results = await generateRecipeByIngredients({
		ingredients: splittedIngredients,
	})

	res.status(200).json({ results })
}
