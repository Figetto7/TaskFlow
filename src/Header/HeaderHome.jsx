import styles from "./HeaderHome.module.css";

export default function HeaderHome () {
  return (
    <div className={styles.headerDiv}>
          <div>
            <h1 className={styles.title}>I tuoi Task</h1>
          <p className={styles.subTitle}>Gestisci e monitora i tuoi task quotidiani</p>
          </div>
          <button className={styles.addTask}> + Nuovo Task</button>
        </div>
  )
}