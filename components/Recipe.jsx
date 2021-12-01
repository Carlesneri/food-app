import Image from 'next/image'
import styles from '../styles/Recipe.module.css'
import parser from 'html-react-parser'
import { useEffect, useState } from 'react'

export default function Recipe({ recipe }) {

  console.log(recipe)

  const [parsedRecipe, setParsedRecipe] = useState(null)

  useEffect(() => {

    if(recipe) {
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
      {
        parsedRecipe ? 
        <article className={styles.recipe}>
          <h2>{parsedRecipe.title}</h2>
          <div className={styles.imageSummary}>
            {parsedRecipe.image && (
              <div className={styles.imageWrapper}>
                <Image
                  src={parsedRecipe.image}
                  layout='fill'
                  objectFit='contain'
                  alt={parsedRecipe.title}
                  className={styles.image}
                />
              </div>
            )}
            <h4>
              <span>Servings: {parsedRecipe.servings}</span>
              <span>Preparation time: {parsedRecipe.readyInMinutes} minutes</span>
            </h4>
            <div>{parsedRecipe.summary}</div>
          </div>
          <h3>
            Ingredients
          </h3>
          <ol className={styles.ingredients}>
            {parsedRecipe.extendedIngredients.map(ingredient => {
              ingredient.source = `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
            return (
              <li key={ingredient.id}>
                <img src={ingredient.source} alt={ingredient.name} />
                <span>
                  {ingredient.name}
                </span>
              </li>
            )
          })}
          </ol>
          {parsedRecipe?.instructions &&
            <>
              <h3>Instructions</h3>   
              {(typeof parsedRecipe.instructions === 'object') ? 
                <div className={styles.instructions}>
                  {parsedRecipe.instructions}
                </div> :
                <div className={styles.instructions}>
                  <ol>
                    {parsedRecipe.instructions.split('\n').map((p, i) => 
                      <li key={i}>
                        {p}
                      </li>
                    )}
                  </ol>
                </div>
              }
            </>
          }
          <div className={styles.tags}>
            {parsedRecipe.vegetarian && <span>Vegetarian</span>}
            {parsedRecipe.vegan && <span>Vegan</span>}
            {parsedRecipe.glutenFree && <span>Gluten Free</span>}
            {parsedRecipe.veryHealthy && <span>Healthy</span>}
          </div>
          <div className={styles.credits}>
            <a href={parsedRecipe.sourceUrl} target="_blank" rel="noreferrer">{parsedRecipe.creditsText}</a>
          </div>

        </article>
        :
        <>
        </>
      }
    </>
    
  )
}

