import Image from 'next/image'
import styles from '../styles/Recipe.module.css'

export default function Recipe({ recipe }) {
  console.log(recipe)
  return (
    <article className={styles.recipe}>
      <h2>{recipe.title}</h2>
      <div className={styles.imageSummary}>
        {recipe.image && (
          <div className={styles.imageWrapper}>
            <Image
              src={recipe.image}
              layout='fill'
              objectFit='contain'
              alt={recipe.title}
              className={styles.image}
            />
          </div>
        )}
        <h4>
          <span>Servings: {recipe.servings}</span>
          <span>Preparation time: {recipe.readyInMinutes} minutes</span>
        </h4>
        <div>{recipe.summary}</div>
      </div>
      <h3>Instructions</h3>
        {recipe.instructions.split('\n').map((p, i) => 
          <p className={styles.instructions} key={i}>
            {p}
          </p>
        )}
      <div className={styles.tags}>
        {recipe.vegetarian && <span>Vegetarian</span>}
        {recipe.vegan && <span>Vegan</span>}
        {recipe.glutenFree && <span>Gluten Free</span>}
      </div>
    </article>
  )
}

