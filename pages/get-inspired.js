import Head from "next/head"
import Recipe from "../components/Recipe"

export default function ToGetInspired({ recipe }) {
	return (
		<>
			<Head>
				<title>To get inspired | Mediterranean food</title>
				<meta
					name="description"
					content="Get inspired with a suculent mediterranean recipe."
				/>
			</Head>
			{recipe && <Recipe recipe={recipe} />}
		</>
	)
}

export const getServerSideProps = async function ({ req }) {
	const { host } = req.headers

	const res = await fetch(`${host}/api/randomRecipe?tags=mediterranean`)
	const { recipe } = await res.json()

	return {
		props: {
			recipe,
		},
	}
}
