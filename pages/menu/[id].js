import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import styles from '../../sass/index.scss'

import { getMenu } from '../../actions/index';
import FormMenu from '../../components/FormMenu';


const MenuItem = ({ data }) => {
  const { query } = useRouter();
  const [ edit, setEdit ] = useState(false)
  const [ menu, setMenu ] = useState({
    id: null,
    name: null,
    ingredients: null,
    price: null,
    state: null
  })
  
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const response = await getMenu(query.id)
    setMenu(...response)
  }
  if(!menu) {
    return (
      <div className={styles.menuContainer}>
        No existe el Menu seleccionado
      </div>
    )
  } else {
    return(
      <div className={styles.menuContainer}>
        <div className={styles.menuItem}>
          <h1>Menu {menu.id}</h1>
          <h3>Nombre: {menu.name}</h3>
          <p>Ingredientes: {menu.ingredients}</p>
          <p>Precio: {menu.price}</p>
          <p>Disponible: {menu.state ? 'si' : 'no'}</p>
          {edit ? 
            <FormMenu menu={menu}/> 
            : null        
          }
          <button 
            onClick={() => setEdit(!edit)}
            className={styles.littleButton}
          >
              {edit ? 'cancelar': 'editar'}
          </button>

        </div>
      </div>
    )
  }
}

export default MenuItem;