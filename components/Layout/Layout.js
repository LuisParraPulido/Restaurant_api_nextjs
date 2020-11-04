import React from 'react';
import Navbar from '../Navbar/Navbar';

import styles from '../../sass/index.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
      <footer className={styles.footer}>Challenge Resturant</footer>
    </div>
  )
}

export default Layout;