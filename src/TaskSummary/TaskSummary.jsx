import React from "react";
import styles from "./TaskSummary.module.css"

export default function TaskSummary ({title, number, flag }) {
  return (
      <div className={styles.statCard}>
        <h2 className={styles.statTitle}>{title}</h2>
        <p 
        className={`${styles.statNumber} ${flag === "S" ? styles.statNumberWarning : 
                                          flag === "C" ? styles.statNumberCompleted :
                                          flag === "T" ? styles.statNumberTotal : ""}`}>
          {number}</p>
      </div>
  )
}