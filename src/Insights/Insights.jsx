import styles from './Insights.module.css'
import React from 'react'
import InsightsDescription from "../InsightDescription/InsightDescription"
import { getMostActiveCategory, getMostActivePriority, getPerfomanceText } from "../../utils";
import { useTaskContext } from "../Context/TaskContext";



export default function Insights () {
  const { tasks } = useTaskContext();
  const mostActiveCategory = React.useMemo(() => getMostActiveCategory(tasks), [tasks]);
  const mostActivePriority = React.useMemo(() => getMostActivePriority(tasks), [tasks]);
  const perfomanceText = React.useMemo(() => getPerfomanceText(tasks), [tasks]);
  return (
    <div className={styles.InsightsContainer}>
      <h2>Insights</h2>
      <p className={styles.InsightsSubtitle}>Analisi automatica dei tuoi pattern di lavoro</p>
      <div className={styles.InsightsDescriptionContainer}>
        <InsightsDescription className={styles.InsightsDescription} type="blue" title="Categoria più attiva"  description={`${mostActiveCategory[0]} (${mostActiveCategory[1]} task)`}/>
        <InsightsDescription className={styles.InsightsDescription} type="green" title="Perfomance" description={perfomanceText}/>
        <InsightsDescription className={styles.InsightsDescription} type="red" title="Priorità più comune" description={`${mostActivePriority[0]} (${mostActivePriority[1]} task)`}/>
      </div>
    </div>
  )

}