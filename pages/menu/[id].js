import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { getMenu } from '../../actions/index';
import FormMenu from '../../components/FormMenu';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';


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
        {edit ? 
          <FormMenu menu={menu}/> 
          : null        
        }
        <button onClick={() => setEdit(!edit)}>{edit ? 'cancelar': 'editar'}</button>
      </div>
    )
  }
}

export default MenuItem;