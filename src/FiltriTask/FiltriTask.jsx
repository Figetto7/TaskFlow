import React from "react";
import styles from "./FiltriTask.module.css"

export default function FiltriTask () {
  return (
    <>
      <input  className={styles.searchBar} type="text" placeholder="    🔍︎    Cerca task..." />
      <select className={styles.select}>
      <option value="">Tutte le priorità</option>
      <option value="alta">Alta</option>
      <option value="media">Media</option>
      <option value="bassa">Bassa</option>
      </select>
      <select className={styles.select}>
      <option value="">Tutti gli stati</option>
      <option value="in corso">In Corso</option>
      <option value="completati">Completati</option>
      </select>
    </>
    
  )
}