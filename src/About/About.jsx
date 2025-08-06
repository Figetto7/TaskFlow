import React from 'react'
import styles from './About.module.css'
import Functionality from "../Functionality/Functionality"
import HeaderAbout from "../Header/HeaderAbout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle, faBullseye, faChartBar, faBolt, faShieldAlt,faMobileAlt } from '@fortawesome/free-solid-svg-icons'


export default function About() {
  return (
    <>
      <HeaderAbout />
      <div className={styles.functionalityContainer}>
        <Functionality title="Gestione Task Intuitiva" description="Crea, organizza e completa i tuoi task con un'interfaccia pulita e moderna." icon={faCheckCircle} />
        <Functionality title="Priorità e Categorie" description="Organizza i task per priorità e categorie per una migliore gestione del tempo." icon={faBullseye} />
        <Functionality title="Analytics Avanzate" description="Monitora le tue performance con grafici dettagliati e insights automatici." icon={faChartBar} />
        <Functionality title="Interfaccia Veloce" description="Design ottimizzato per la produttività con transizioni fluide e responsive." icon={faBolt} />
        <Functionality title="Validazione Robusta" description="Controlli inline per garantire la qualità e consistenza dei dati." icon={faShieldAlt} />
        <Functionality title="Responsive Design" description="Perfettamente utilizzabile su desktop, tablet e dispositivi mobili." icon={faMobileAlt} />
      </div>
    </>
  )
}