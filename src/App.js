import {useState, useEffect} from 'react'
import {fetchPopularMovies} from './services/movies-db-api'
import styles from './App.module.css'
import Header from './components/Header'
import Movies from './components/Movies'
import Footer from './components/Footer'
import Member from './components/Member'

function App() {
  const COMPANY = 'Top Three Flicks'
  const [movies, setMovies] = useState([])
  const getMovies = async () => {
    try {
      const data = await fetchPopularMovies()
      setMovies(data.results)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className={styles.app}>
      <Header company={COMPANY} />
      <Movies movies={movies.slice(0,3)} />
      <Member />
      <Footer company={COMPANY}  />
    </div>
  )
}

export default App
