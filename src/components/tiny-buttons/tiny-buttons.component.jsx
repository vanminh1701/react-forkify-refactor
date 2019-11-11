import React, { useContext } from 'react'

import TinyButton from '../tiny-button/tiny-button.component'

import { RecipeContext } from '../../providers/recipe/recipe.providers'

import './tiny-buttons.styles.scss'

const checkServings = (servings, minusServings) => {
  if (!(servings === 1)) return minusServings;
}

const TinyButtons = () => {
  const { minusServings, plusServings, servings } = useContext(RecipeContext);
  return (
    <div className="recipe__info-buttons">
        <TinyButton 
          shape={"minus"} 
          changeServings={checkServings(servings, minusServings)}
        />
        <TinyButton shape={"plus"} changeServings={plusServings}/>
    </div>
  )
}

export default TinyButtons;