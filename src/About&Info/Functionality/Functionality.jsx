import React from "react";
import styles from "./Functionality.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Functionality({icon, title, description}) {
  return (
    <div className={styles.functionalityContainer}>
      <FontAwesomeIcon icon={icon} size="2x" className={styles.AboutIconFunctionality} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
