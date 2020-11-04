import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../sass/index.scss'

import { deleteMenu } from '../actions/index';


const Home = () => {
  const router = useRouter()
  const [ id, setId ] = useState()
  const handleText = event => {
    setId({
      [event.target.name]: event.target.value
    })
  }

  const handleRoute = (e) => {
    e.preventDefault()
    router.push(`/menu/${id.id}`)
  }

  const handleDelete = async() => {
    const response = await deleteMenu(id.id)
    alert('Menu Eliminado')
  }

  return(
    <div className={styles.box}>
      <div className={styles.container}>
        <h1>Restaurant Menu</h1>
        <div className={styles.containerItem}>
          <Link href='/menu'>
          <a className={styles.bigButton}>Ver Todos</a>
          </Link>
        </div>
        <div className={styles.containerItem}>
          <Link href='/addMenu'>
            <a className={styles.bigButton}>Agregar un Menu</a>
          </Link>
        </div>
        <div className={styles.containerItem}>
          <label>Eliminar un Menu</label>
          <div className={styles.inputContainer}>
            <input 
              type='text'
              className={styles.input}
              name='id'
              placeholder='ingrese id'
              onChange={handleText} 
            />
            <button className={styles.littleButton} onClick={handleDelete}>Eliminar</button>
          </div>
        </div>
        <div className={styles.containerItem}>
          <label>Buscar Menu</label>
          <div className={styles.inputContainer}>
            <input 
              type='text'
              className={styles.input}
              name='id'
              placeholder='ingrese id'
              onChange={handleText} 
            />
            <button className={styles.littleButton} onClick={handleRoute}>ir</button>
          </div>
        </div>
      </div>
    

    </div>
    
  )
}

export default Home;