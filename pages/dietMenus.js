
export default function dietMenus({ menu }) {
  return (
    <div>
      {menu}
    </div>
  )
}

export const getServerSideProps = async () => {
  const starter = ''
  const mainDish = ''
  const dessert = ''
  
  return {
    props: {
      starter,
      mainDish,
      dessert
    }
  }
}
