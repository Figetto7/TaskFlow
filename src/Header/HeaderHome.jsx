import styles from "./HeaderHome.module.css";

import { useNavigate } from "react-router-dom";

export default function HeaderHome () {
  const navigate = useNavigate();

  return (
    <div className={styles.headerDiv}>
          <div>
            <h1 className={styles.title}>I tuoi Task</h1>
          <p className={styles.subTitle}>Gestisci e monitora i tuoi task quotidiani</p>
          </div>
          <button className={styles.addTask} onClick={() => navigate("/AddTask")}> + Nuovo Task</button>
        </div>
  )
}