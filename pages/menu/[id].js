import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { getMenu } from '../../actions/index';


const MenuItem = ({ data }) => {
  const { query } = useRouter();
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
      <div>No existe el Menu seleccionado</div>
    )
  } else {
    return(
      <div>
        <h1>Menu {menu.id}</h1>
        <h3>Nombre: {menu.name}</h3>
        <p>Ingredientes: {menu.ingredients}</p>
        <p>Precio: {menu.price}</p>
        <p>Disponible: {menu.state ? 'si' : 'no'}</p>
      </div>
    )
  }
}

export default MenuItem;