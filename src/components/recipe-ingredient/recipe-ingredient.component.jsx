import React from 'react'

import { formatCount } from '../../providers/recipe/recipe.utils'

import './recipe-ingredient.styles.scss'

const RecipeIngredient = ({ ingredient }) => {
  const { count, unit, content } = ingredient;
  return (
    <li className="recipe__item">
      <svg className="recipe__icon">
          <use href="../../img/icons.svg#icon-check"></use>
      </svg>
      <div className="recipe__count">{formatCount(count)}</div>
      <div className="recipe__ingredient">
          <span className="recipe__unit">{unit}</span>
          {content}
      </div>
    </li>
  )
}

export default RecipeIngredient;