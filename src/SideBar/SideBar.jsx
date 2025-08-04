import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "./SideBar.module.css"
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus, faChartSimple, faInfo } from '@fortawesome/free-solid-svg-icons';

export default function SideBar() {
  const location = useLocation();
  
  return (
    <Sidebar className={styles.sidebar} >
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <img src="/public/favicon-32x32.png" alt="TaskFlow Logo" style={{width: '24px', height: '24px'}} />
        </div>
        <div className={styles.logoText}>
        <h1>TaskFlow</h1>
        <p>Gestione Task</p>
        </div>
      </div>
      <Menu>
        <MenuItem active={location.pathname === '/'} component={<Link to="/" />}>
          <FontAwesomeIcon icon={faHouse} /> Home
        </MenuItem>
        <MenuItem active={location.pathname === '/AddTask'} component={<Link to="/AddTask" />}>
          <FontAwesomeIcon icon={faPlus} /> Aggiungi Task
        </MenuItem>
        <MenuItem active={location.pathname === '/analytics'} component={<Link to="/analytics" />}>
          <FontAwesomeIcon icon={faChartSimple} /> Analytics
        </MenuItem>
        <MenuItem active={location.pathname === '/about'} component={<Link to="/about" />}>
          <FontAwesomeIcon icon={faInfo} /> About
        </MenuItem>
      </Menu>
      <div className={styles.bottomElement}>
        <p> V 1.00</p>
      </div>
    </Sidebar>
  );
}
