import React, { useEffect, useState } from 'react';

import styles from '../sass/index.scss'


import { postMenu, editMenu } from '../actions';

const formMenu = (props) => {
  const [form, setValues] = useState({
    name: props.menu ? props.menu.name : null,
    ingredients: props.menu ? props.menu.ingredients : null,
    price: props.menu ? props.menu.price : null,
    state: props.menu ? props.menu.state : null,
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
  const handleEdit = async() => {
    event.preventDefault()
    const changeMenu = await editMenu(props.menu.id, form)
  }
  return(
    <div>
      <form 
        onSubmit={props.menu ? handleEdit : handleSubmit}
        className={styles.containerForm}
      >
         <input 
          name='name'
          type='text'
          onChange={handleText}
          placeholder='Name'
          className={styles.input}
        />
         <input 
          name='ingredients'
          type='text'
          onChange={handleText}
          placeholder='Ingredients'
          className={styles.input}
        />
         <input 
          name='price'
          type='text'
          onChange={handleText}
          placeholder='Price'
          className={styles.input}
        />
         <input 
          name='state'
          type='text'
          onChange={handleText}
          placeholder='available'
          className={styles.input}
        />
        <button className={styles.littleButton} type='submit'>Guardar</button>
      </form>
    </div>
  )
}

export default formMenu;