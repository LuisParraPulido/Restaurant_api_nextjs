import axios from 'axios';

const getAllMenus= async() => {
  try {
  const request = await axios({
    method: 'GET',
    url: '/api/recipes',
  })
  return request.data
  } catch (error) {
    console.error(error)
  }
}

const postMenu = async(data) => {
  try {
  const request = await axios({
    method: 'POST',
    url: '/api/recipes',
    data,
  })
  return request.data
    
  } catch (error) {
    console.error(error)
  }
}
const getMenu = async(id) => {
  try {
  const request = await axios({
    method: 'GET',
    url: `/api/recipes/${id}`,
  })
  return request.data
    
  } catch (error) {
    console.error(error)
  }
}
const editMenu = async(id, data) => {
  try {
  const request = await axios({
    method: 'PUT',
    url: `/api/recipes/${id}`,
    data,
  })
  return request.data
    
  } catch (error) {
    console.error(error)
  }
}
const deleteMenu = async(id) => {
  try {
  const request = await axios({
    method: 'DELETE',
    url: `/api/recipes/${id}`,
  })
  return request.data
    
  } catch (error) {
    console.error(error)
  }
}

export {
  getAllMenus,
  postMenu,
  getMenu,
  editMenu,
  deleteMenu
}