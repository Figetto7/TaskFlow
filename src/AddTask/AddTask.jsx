import React from 'react'
import styles from './AddTask.module.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import NewTaskForm from "../NewTaskForm/NewTaskForm";


export default function AddTask (){
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.addTaskHeader}>
      
      <h1 className={styles.AddTasktitle}>Nuovo Task</h1>
      <button className={styles.backButtonHome} onClick={() => navigate('/')}> Torna alla Home  <FontAwesomeIcon icon={faArrowRight} /></button>
      <p className={styles.AddTasksubtitle}>Crea un nuovo task per organizzare meglio il tuo lavoro</p>
    </div>
    <NewTaskForm />
    </>
    
    
  )
}