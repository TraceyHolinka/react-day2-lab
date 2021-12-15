import styles from './Footer.module.css'

function Footer({company}) {
  return (
    <div className={styles.container}>
      <div>Copyright &copy; All Rights Reserved</div>
      <div>2021 {company}</div>
    </div>
  )
}

export default Footer