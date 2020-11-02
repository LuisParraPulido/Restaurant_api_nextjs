import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
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