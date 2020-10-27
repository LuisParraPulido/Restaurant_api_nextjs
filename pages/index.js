import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import fetch from 'isomorphic-unfetch'

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const recipes = await fetch('/api/recipes')
        const data = await recipes.json()
        console.log(data)
        
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return(
    <div>
      <h1>Liam Adrian Teolt Parra</h1>
    </div>
  )
}

export default Home;