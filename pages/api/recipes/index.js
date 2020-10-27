import DB from '../../../database/db';

const allRecipes = async (req, res) => {
  const db = new DB();
  const allEntries = await db.getAll()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(allEntries))
}

export  default allRecipes;