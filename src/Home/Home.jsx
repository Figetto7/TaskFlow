import React from "react";
import TaskSummary from "../TaskSummary/TaskSummary";
import HeaderHome from "../Header/HeaderHome";
import FiltriTask from "../FiltriTask/FiltriTask"
import Task from "../Task/Task"
import styles from "./Home.module.css";

export default function Home() {
  const [active, setActive] = React.useState(true);
  return (
    
    <>
      <HeaderHome />
      <div className={styles.taskSummary}>
      <TaskSummary title="Task Totali" number="5" flag="T"/>
      <TaskSummary title="Completati" number="2" flag="C" />
      <TaskSummary title="In scadenza" number="3" flag="S"/>
      </div>
      <FiltriTask />
      <Task 
          title={"Completare presentazione Q4"} 
          description={"Preparare la presentazione dei risultati del quarto trimestre per il meeting con il management."} 
          category={"Lavoro"} 
          deadline={"30/12/2024"} 
          priority={"alta"}
          active={active}
          setActive={setActive} />
      <Task 
          title={"Rivedere il budget"} 
          description={"Analizzare le spese del trimestre e proporre modifiche."} 
          category={"Finanza"} 
          deadline={"15/01/2024"} 
          priority={"media"}
          active={active}
          setActive={setActive} />
      <Task 
          title={"Organizzare la festa di Natale"} 
          description={"Pianificare la festa di Natale per il team, inclusi cibo e intrattenimento."} 
          category={"Eventi"} 
          deadline={"20/12/2025"} 
          priority={"bassa"}
          active={active}
          setActive={setActive} />
    </>
  )
}
    