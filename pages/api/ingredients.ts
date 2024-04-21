import type { NextApiRequest, NextApiResponse } from "next"
import { getSpoonacularIngredients } from "../../services/getSpoonacularIngredients"

interface IngredientsApiResponse {
	results: any
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IngredientsApiResponse>
) {
	const { query } = req.query

	const results = await getSpoonacularIngredients({
		query: typeof query === "string" ? query : query[0],
	})

	res.status(200).json({ results })
}
