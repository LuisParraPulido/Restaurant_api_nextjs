import allData from './data'

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
}


export default Database