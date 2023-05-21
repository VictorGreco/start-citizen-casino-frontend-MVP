import React from 'react';

import styles from './LogginLight.module.css';

export const LogginLight = ({ user }) => {

  return (
    <div className={`${styles.loggedAccount} ${user ? styles.loggedIn : styles.loggedOut} ${user ? styles.loggedInShadow : styles.loggedOutShadow}`}></div>
  );
}