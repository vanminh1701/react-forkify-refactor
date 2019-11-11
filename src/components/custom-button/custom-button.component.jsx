import React, { useContext } from 'react'

import { RecipeContext } from '../../providers/recipe/recipe.providers'

import './custom-button.styles.scss'

const CustomButton = ({ shape, chidren, invert }) => {
  const { setRenderShopping, renderRecipe } = useContext(RecipeContext)
  return (
    <button 
      className={`btn ${invert ? 'invert' : ''}`}
      onClick={() => {
        if (renderRecipe) setRenderShopping(true)
      }}
    >
      <svg className="search__icon">
        <use href={`../../img/icons.svg#icon-${shape}`} />
      </svg>
      <span>{chidren}</span>
    </button>
  )
  }

export default CustomButton;