import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/ToGetInspired.module.css'

export default function ToGetInspired({ recipe = {} }) {
  // console.log({day})
  // const [recipe, setRecipe] = useState({})

  // useEffect(() => {
  //   fetch(`/api/randomRecipe`)
  //   .then(res => res.json())
  //   .then(data => setRecipe(data))
  // }, [])
  
  return (
    <div className={styles.page} >
      <Head>
        <title>To get inspired | Mediterranean food</title>
        <meta name="description" content="Get inspired with a suculent mediterranean recipe." />
      </Head>
      {recipe !== {} && (
        <>
          <article>
            <h2>
              {recipe.title}
            </h2>
            <div className={styles.imageWrapper}>
              <Image
              src={recipe.image}
              layout='fill'
              objectFit='contain'
              alt={recipe.title}
              className={styles.image}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, saepe illum nemo laborum, unde mollitia molestias quia ipsa, facere reprehenderit cumque quae quis rem amet! Quis delectus eos possimus! Officiis libero blanditiis deleniti molestiae aliquam tenetur hic, voluptates omnis illum nisi enim tempore sint, assumenda officia autem. Temporibus voluptas sit saepe, optio ipsum accusamus sequi numquam in doloribus. Delectus eligendi unde distinctio, magni quidem voluptatum id numquam accusantium dolores provident cumque modi adipisci rem quis impedit fugiat, possimus eos molestiae repudiandae velit sunt eius inventore tenetur. Dolor distinctio alias repudiandae tempore necessitatibus. Pariatur temporibus, dolores minus fugiat quam nisi? Cum hic, labore ratione repellendus quidem sequi, non molestiae, sunt recusandae aliquam earum tempora et. Facilis reiciendis molestiae quia sunt, doloremque ipsam est quisquam dolores natus debitis. Placeat odio ab eius maiores animi veniam dolore, neque ratione aliquid, unde consequatur quia fugiat deleniti porro fuga? Aut, quas accusamus culpa sit dignissimos provident, soluta aliquam, alias enim quaerat fugiat omnis quasi quam nobis quisquam atque a possimus harum pariatur suscipit. Reiciendis repellat officia nobis dolores, repudiandae non aperiam in deserunt consectetur optio. Voluptatem, ad nobis quibusdam fuga ipsum id animi illo minima perferendis, in quam modi temporibus delectus reiciendis totam reprehenderit voluptas repudiandae. Ipsum voluptates quibusdam consequatur cum enim tempora ipsam hic sint officiis minus, quia provident itaque beatae, est doloribus facilis autem et fugit commodi, veritatis neque debitis. Dignissimos eum eligendi quidem est inventore tempore voluptatibus fuga quae? Fugiat sunt debitis illum et delectus sapiente atque, eius, consequatur doloribus eveniet doloremque?
            </p>
          </article>
        </>
      )}
    </div>
  )
}

export const getServerSideProps = async function() {
  // const day = new Date().getDate()

  // console.log(day)

  const res = await fetch('http://localhost:3000/api/randomRecipe')
  const { recipes } = await res.json()
  // console.log(recipes[0])

  return {
    props: {
      recipe: recipes[0]
    }
  }
}

