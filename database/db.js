import data from './data'

let allData = data;

class Database {
  constructor() {}

  async getAll(){
    const asArray = allData
    return asArray
  }

  async getById(id) {
    const entry = allData.filter(item => item.id === id)
      if (entry.length === 0) {
        return null
      }
    return entry
  }
  async postMenu(data) {
    const newMenu = {
      id: Math.floor(Math.random() * Math.floor(1000)),
      ...data
    }
    allData.push(newMenu)
    return allData
  }
  async putMenu(id, data) {
    const menu = allData.find(item => item.id !== id)
    const newData = allData.filter(item => item.id !== id)
    const newMenu = {
      ...menu,
      ...newData
    }
    data.push(newMenu)
    allData = data
    return allData
  }
  async deleteMenu(id) {
    const newData = allData.filter(item => item.id !== id)
    allData = newData
    return newData
  }
  
}


export default Database