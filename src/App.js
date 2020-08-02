import React, {useEffect, useState} from 'react';
import './App.css';

import Recipe from "./Components/Recipe"

const App = () => {
  const APP_ID = "3690a396"
  const APP_KEY = "a0f62a7021ffb2125bb7d975975c09bf"


  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    getRecipes()
  },[query])

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  return (
    <div className="App">

      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={e => (setSearch(e.target.value))}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image} 
              calories={recipe.recipe.calories} 
              ingredients={recipe.recipe.ingredients}
              servings={recipe.recipe.yield}/>
          )
        )}
      </div>
    </div>
  );
}

export default App;
