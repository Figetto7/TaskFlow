import React from 'react'
import styles from "./HeaderAbout.module.css";
export default function HeaderAbout() {
  return (
    <>
      <img src="/public/android-chrome-512x512.png" alt="Logo Image" className={styles.aboutLogo} />
      <h1 className={styles.aboutTitle}>TaskFlow</h1>
      <p className={styles.aboutDescription}>Un'applicazione moderna e minimalista per la gestione efficace dei tuoi task <br /> personali, con analytics integrate per monitorare la tua produttività.</p>
      <h1 className={styles.aboutFeaturesTitle}>Funzionalità principali</h1>
    </>
  )
}