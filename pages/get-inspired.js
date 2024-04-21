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

export const getServerSideProps = async function () {
	const HOST =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: process.env.PRODUCTION_HOST

	const res = await fetch(`${HOST}/api/randomRecipe?tags=mediterranean`)
	const { recipe } = await res.json()

	return {
		props: {
			recipe,
		},
	}
}
