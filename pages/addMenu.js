import React from 'react';

import styles from '../sass/index.scss'

import FormMenu from '../components/FormMenu';

const AboutMenu = (props) => {
  return(
    <div className={styles.box}>
      <div className={styles.container}>
        <h1>Crear Menu</h1>
        <FormMenu />
      </div>
    </div>
  )
}

export default AboutMenu;