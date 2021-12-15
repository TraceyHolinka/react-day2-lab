import styles from './Member.module.css'

function Member() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}><img className={styles.image} src="https://images.unsplash.com/photo-1593698054589-8c14bb66d2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Description of image" /></div>
      <div className={styles.member}>
        <h2 className={styles.heading}>Member of the Month</h2>
        <p>Gingerbread jelly beans halvah donut gummi bears icing toffee sugar plum liquorice. Chupa chups powder brownie donut cake. Jujubes danish cheesecake gummies croissant. Gingerbread jujubes liquorice chocolate cake croissant sesame snaps muffin. Cookie cotton candy cotton candy chocolate cake powder.</p>
      </div>
    </div>
  )
}

export default Member