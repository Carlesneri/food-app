// import { useRouter } from 'next/router'
import Head from "next/head"
import Recipe from "../../components/Recipe"

export default function RecipePage({ recipe = null }) {
	const titleTag = recipe?.title || ""
	let content = recipe?.summary?.split(". ")[0] || ""

	return (
		<>
			<Head>
				<title>{titleTag} | Mediterranean food</title>
				<meta name="description" content={content} />
			</Head>
			{recipe && <Recipe recipe={recipe} />}
		</>
	)
}

export const getServerSideProps = async function ({ query, req }) {
	const { name } = query
	const splittedName = name.split("-")
	const ID = splittedName[splittedName.length - 1]
	const { host } = req.headers

	try {
		const URL = `${host}/api/recipesByID?ID=${ID}`
		const res = await fetch(URL)
		const { recipe } = await res.json()

		return {
			props: {
				recipe,
			},
		}
	} catch {
		console.error("No recipe found")

		return {
			props: {
				recipe: null,
			},
		}
	}
}
