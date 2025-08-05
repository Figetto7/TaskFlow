import styles from "./HeaderAnalytics.module.css";
import React from "react";


export default function HeaderAnalytics () {

  return (
    <div className={styles.headerDiv}>
      <h1 className={styles.title}>Analytics</h1>
      <p className={styles.subTitle}>Monitora le tue performance e analizza i pattern dei tuoi task</p>
    </div>
  )
}