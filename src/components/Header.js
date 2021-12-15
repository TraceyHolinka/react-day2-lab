import styles from './Header.module.css'

function Header ({company}) {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{company}</h1>
      <nav>
        <a
          className={styles.link}
          href="https://news.bloomberglaw.com"
        >
          Login
        </a>
        <a
            className={styles.link}
          href="https://news.bloomberglaw.com"
        >
          Signup
        </a>
      </nav>
    </header>
  )
}

export default Header