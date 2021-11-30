import Head from 'next/head'
import parser from 'html-react-parser'
import { useEffect, useState } from 'react'
import Recipe from '../components/Recipe'

export default function ToGetInspired({ recipe = {} }) {

  const [parsedRecipe, setParsedRecipe] = useState({})

  useEffect(() => {

    if(recipe !== {}) {
      const parsedRecipe = {
        ...recipe,
        summary: parser(recipe.summary),
        instructions: parser(recipe.instructions)
      }

      setParsedRecipe(parsedRecipe)
    }

  }, [recipe])
  
  return (
    <>
      <Head>
        <title>To get inspired | Mediterranean food</title>
        <meta name="description" content="Get inspired with a suculent mediterranean recipe." />
      </Head>
      {parsedRecipe !== {} && (
        <Recipe recipe={parsedRecipe} />
      )}
    </>
  )
}

export const getServerSideProps = async function() {
  const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.PRODUCTION_HOST

  const res = await fetch(`${HOST}/api/randomRecipe?tags=mediterranean`)
  const { recipe } = await res.json()
  // console.log(recipe)

  return {
    props: {
      recipe
    }
  }
}

