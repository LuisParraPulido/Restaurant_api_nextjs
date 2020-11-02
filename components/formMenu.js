import React, { useEffect, useState } from 'react';

import { postMenu } from '../actions';

const formMenu = (props) => {
  const [form, setValues] = useState({
    name: null,
    description: null,
    price: null,
    state: false,
  })

  const handleText = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async() => {
    event.preventDefault()
    const createMenu = await postMenu(form)
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
         <input 
          name='name'
          type='text'
          onChange={handleText}
          placeholder='Name'
        />
         <input 
          name='description'
          type='text'
          onChange={handleText}
          placeholder='Ingredients Description'
        />
         <input 
          name='price'
          type='text'
          onChange={handleText}
          placeholder='Price'
        />
         <input 
          name='state'
          type='text'
          onChange={handleText}
          placeholder='available'
        />
        <button type='submit'>Guardar</button>
      </form>
    </div>
  )
}

export default formMenu;