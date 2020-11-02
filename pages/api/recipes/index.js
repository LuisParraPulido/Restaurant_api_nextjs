import DB from '../../../database/db';

const db = new DB();


export default async (req, res) => {
  const data = req.body
  switch (req.method) {
    case 'GET':
      const allEntries = await db.getAll()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(allEntries))
     
      break
    case 'POST':
      const addMenu = await db.postMenu(data)
    
      res.statusCode = 201
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(addMenu))
      break
  }
}