import React from 'react'

import IngredientsList from '../ingredients-list/ingredients-list.component'
import CustomButton from '../custom-button/custom-button.component'

import './recipe-ingredients.styles.scss'

const RecipeIngredients = () => (
  <div className="recipe__ingredients">
    <IngredientsList />
    <CustomButton 
      type="button" 
      shape={"shopping-cart"} 
      chidren={"Add to shopping list"} 
    />
  </div>
)

export default RecipeIngredients;