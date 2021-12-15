import styles from './Movies.module.css'
import Card from './Card'

function Movies({movies}) {

  return (
    <div className={styles.container}>
      {movies.map((movie, index) => (
        <Card key={index} item={movie} />
      ))}
    </div>
  )
}

export default Movies