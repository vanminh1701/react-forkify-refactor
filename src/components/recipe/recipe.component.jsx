import React, { useContext } from 'react'

import { RecipeContext } from '../../providers/recipe/recipe.providers'

import RecipeFigure from '../recipe-figure/recipe-figure.component'
import RecipeDetails from '../recipe-details/recipe-details.component'
import RecipeIngredients from '../recipe-ingredients/recipe-ingredients.component'
import RecipeDirections from '../recipe-directions/recipe-directions.component'

import Loader from '../loader/loader.component'

import './recipe.styles.scss'

const Recipe = () => {
  const { recipeID, recipe } = useContext(RecipeContext)
  const { image_url,title, publisher, publisher_url } = recipe;
  if (recipeID)
  return (
    <div className="recipe">
      <RecipeFigure image_url={image_url} title={title} />
      <RecipeDetails />
      <RecipeIngredients />
      <RecipeDirections publisher={publisher} publisher_url={publisher_url}/>
    </div>
  )
  else 
    return (<Loader />)
}


export default Recipe;