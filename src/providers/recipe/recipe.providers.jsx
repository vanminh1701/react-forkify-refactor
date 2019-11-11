import React, { useState, createContext, useEffect } from 'react'
import { key } from '../../config.api'
import { parseIngrdients, updateServings } from './recipe.utils'

export const RecipeContext = createContext({
  recipeID: '',
  recipe: {},
  renderRecipe: false,
  servings: 4,
  time: 120,
  renderShopping: false,
  likeList: []
})

const RecipeProvider = ({ children }) => {
  const [recipeID, setRecipeID] = useState('');
  const [recipe, setRecipe] = useState({});
  const [renderRecipe, setRenderRecipe] = useState(false)
  const [time,] = useState(120);
  const [servings, setServings] = useState(4)

  const [renderShopping, setRenderShopping] = useState(false)

  const [likeList, setLikeList] = useState([]) 

  const fetchRecipe = async () => {
    try {
      const recipe = await fetch(`https://www.food2fork.com/api/get?key=${key}&rId=${recipeID}`)
              .then(data => data.json())
              .then(data => data.recipe)
      recipe.ingredients = parseIngrdients(recipe.ingredients);
      setRecipe(recipe)
      setRenderRecipe(true)
    } catch(error) {
      alert("Fetch Recipe Error =))")
    }
  }

  const minusServings = () => {
    setRecipe(updateServings(recipe, servings, "minus"))
    setServings(servings => servings - 1);
  }

  const plusServings = () => {
    setRecipe(updateServings(recipe, servings, "plus"))
    setServings(servings => servings + 1);
  }

  const handleLoveButton = () => {
    if(!likeList.length || (likeList.findIndex(recipe => recipe.recipe_id === recipeID) === -1)) {
      setLikeList(likeList => likeList.concat([recipe]))
    } else {
      setLikeList(likeList => likeList.filter(recipe => recipe.recipe_id !== recipeID))
    }
  }

  useEffect(() => { 
    if(recipeID) fetchRecipe()
  }, [recipeID])

  return (
    <RecipeContext.Provider
      value={{
        recipeID,
        setRecipeID,
        recipe,
        renderRecipe,
        servings,
        setServings,
        time,
        minusServings,
        plusServings,
        renderShopping,
        setRenderShopping,
        likeList,
        setLikeList,
        handleLoveButton
      }}
    >
      { children }
    </RecipeContext.Provider>
  )
}

export default RecipeProvider;