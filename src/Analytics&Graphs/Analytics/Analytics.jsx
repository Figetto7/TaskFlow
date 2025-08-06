import React from 'react'
import HeaderAnalytics from "../HeaderAnalytics"
import Insights from "../Insights/Insights"
import ChartPie from "../ChartPie/ChartPie"
import Histogram from "../Histogram/Histogram"
import styles from "./Analytics.module.css"

export default function Analytics () {
  return (
    <>
      <HeaderAnalytics />
      <Insights />
      <div className={styles.analyticsNumberTaskContainer}>
      <div className={styles.StatisticsContainer}>
        <ChartPie />
      </div>
      <div className={styles.StatisticsContainer}>
        <Histogram />
      </div>
    </div>
    </>
  )
}