import styles from './Insights.module.css'
import React from 'react'
import InsightsDescription from "../InsightDescription/InsightDescription"

export default function Insights () {
  return (
    <div className={styles.InsightsContainer}>
      <h2>Insights</h2>
      <p className={styles.InsightsSubtitle}>Analisi automatica dei tuoi pattern di lavoro</p>
      <div className={styles.InsightsDescriptionContainer}>
        <InsightsDescription className={styles.InsightsDescription} type="blue" title="Categoria più attiva"  description="Casa (2 task)"/>
        <InsightsDescription className={styles.InsightsDescription} type="green" title="Perfomance" description="C'è margine di miglioramento."/>
        <InsightsDescription className={styles.InsightsDescription} type="red" title="Priorità più comune" description="Media (3 task)"/>
      </div>
    </div>
  )

}