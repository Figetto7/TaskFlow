import React from 'react'
import styles from './AddTask.module.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function AddTask (){
  const navigate = useNavigate();
  return (
    <div className={styles.addTaskHeader}>
      <button className={styles.backButtonHome} onClick={() => navigate('/')}> <FontAwesomeIcon icon={faArrowLeft} /> Torna alla Home</button>
      <h1 className={styles.AddTasktitle}>Nuovo Task</h1>
      <p className={styles.AddTasksubtitle}>Crea un nuovo task per organizzare meglio il tuo lavoro</p>
    </div>
    
  )
}