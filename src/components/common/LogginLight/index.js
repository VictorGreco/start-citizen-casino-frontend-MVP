import React from 'react';

import styles from './LogginLight.module.css';

export const LogginLight = ({ user, isOpen }) => {

  return (
    <div className={`${styles.loggedAccount} ${user ? styles.loggedIn : styles.loggedOut} ${user ? styles.loggedInShadow : styles.loggedOutShadow} ${isOpen ? styles.isOpen : ""}`}></div>
  );
}