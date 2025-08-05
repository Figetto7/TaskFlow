import React from 'react';
import styles from './InsightDescription.module.css';

export default function InsightsDescription ({ type, title, description }) {
  function getInsightsDescriptionStyle(type) {
  switch(type) {
    case 'blue': return styles.InsightsDescriptionBlue;
    case 'green': return styles.InsightsDescriptionGreen;
    case 'red': return styles.InsightsDescriptionRed;
    default: return styles.InsightsDescriptionDefault;
  }
}
  function getInsightsDescriptionStyleP(type) {
  switch(type) {
    case 'blue': return styles.InsightsDescriptionBlueP;
    case 'green': return styles.InsightsDescriptionGreenP;
    case 'red': return styles.InsightsDescriptionRedP;
    default: return styles.InsightsDescriptionDefaultP;
  }
}
  return (
    <div className={getInsightsDescriptionStyle(type)}>
        <h1>{title}</h1>
        <p className={getInsightsDescriptionStyleP(type)}>{description}</p>
    </div>
  )
}