import React from 'react'

import RecipeInfo from '../recipe-info/recipe-info.component'
import LoveButton from '../love-button/love-button.component'

import './recipe-details.styles.scss'

const RecipeDetails = () => (
  <div className="recipe__details">
    <RecipeInfo />
    <LoveButton />
  </div>
)

export default RecipeDetails;