import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../../sass/index.scss'


import { getAllMenus } from '../../actions/index';


const menu = (props) => { 
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    const data = await getAllMenus()
    setMenus(data)
  }

  return(
    <div className={styles.menuContainer}>
      <h1>Menus</h1>
      <div className={styles.menuItems}>
        {menus.map(menu => {
          return (
            <div key={menu.id}>
              <h3>Nombre: {menu.name}</h3>
              <p>Id: {menu.id}</p>
              <p>Ingredientes: {menu.ingredients}</p>
              <p>Precio: {menu.price}</p>
              <p>Disponible: {menu.state ? 'si' : 'no'}</p>
            </div>
          )
        })}
      </div>     
    </div>
  )
}

export default menu;