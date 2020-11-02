import DB from '../../../database/db';

const db = new DB();


export default async (req, res) => {
  const data = req.body
  const queryId = req.query.id
  const id = parseInt(queryId)


  switch (req.method) {
    case 'GET':
      const entry = await db.getById(id)
      res.status(200).json(entry)
     
      break
    case 'PUT':
      const editMenu = await db.putMenu(id, data)
    
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(editMenu))
      break
    case 'DELETE':
      const deleteMenu = await db.deleteMenu(id)
    
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(deleteMenu))
      break
  }
}