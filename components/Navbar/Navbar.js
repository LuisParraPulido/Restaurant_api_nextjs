import React from 'react';
import Link from 'next/link';

import styles from '../../sass/index.scss';

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <menu>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/addMenu'>
          <a>Agregar Menu</a>
        </Link>
      </menu>
    </nav>
  )
}

export default Navbar;