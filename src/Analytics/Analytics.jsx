import React from 'react'
import HeaderAnalytics from "../Header/HeaderAnalytics"
import Insights from "../Insights/Insights"
import ChartPie from "../ChartPie/ChartPie"

export default function Analytics () {
  return (
    <>
      <HeaderAnalytics />
      <Insights />
      <ChartPie />
    </>
  )
}