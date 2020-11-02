import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    <div>
      <h1>Restaurant Menu</h1>
      <div>
        <Link href='/menu'>
        <a>Ver Todos</a>
        </Link>
      </div>
      <div>
        <Link href='/addMenu'>
          <a>Agregar un Menu</a>
        </Link>
      </div>
      <div>
        Editar un menu
      </div>
      <div>
        <label>Eliminar un Menu</label>
        <input 
          type='text'
          name='id'
          placeholder='ingrese id'
          onChange={handleText} 
        />
        <button onClick={handleDelete}>Eliminar</button>
      </div>
      <div>
        <label>Buscar Menu</label>
        <input 
          type='text'
          name='id'
          placeholder='ingrese id'
          onChange={handleText} 
        />
        <button onClick={handleRoute}>ir</button>
      </div>
    </div>
  )
}

export default Home;