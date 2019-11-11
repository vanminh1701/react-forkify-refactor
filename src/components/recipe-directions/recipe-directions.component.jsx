import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './recipe-directions.styles.scss'

const RecipeDirections = ({ publisher, publisher_url }) => (
  <div className="recipe__directions">
    <h2 className="heading-2">How to cook it</h2>
    <p className="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span className="recipe__by">{" "}{publisher}</span>. Please check out directions at their website.
    </p>
    <a className="recipe__direction-link" href={publisher_url} target="_blank" rel="noopener noreferrer">
      <CustomButton 
        type="button" 
        shape={"triangle-right"} 
        chidren={"Directions"}
        invert={true}
      />
    </a>
  </div>
)

export default RecipeDirections;