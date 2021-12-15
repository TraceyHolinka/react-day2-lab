import styles from './Card.module.css'

function Card({item}) {
  console.log(item)

  return (
    <div className={styles.card}>
      <img className={styles.image} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item['poster_path']}`} />
    </div>
  )
}

export default Card