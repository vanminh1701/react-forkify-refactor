import React, { useContext } from 'react'

import Recipe from '../recipe/recipe.component'

import { RecipeContext } from '../../providers/recipe/recipe.providers'

const RecipeContainer = () => {
  const { renderRecipe } = useContext(RecipeContext);
  if(renderRecipe) 
    return (<Recipe />) 
  else 
    return ('')
}

export default RecipeContainer;