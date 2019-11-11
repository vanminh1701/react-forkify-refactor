import React from 'react'

import './recipe-figure.styles.scss'

const RecipeFigure = ({ image_url,title  }) => (
  <figure className="recipe__fig">
      <img src={image_url} alt={title} className="recipe__img" />
      <h1 className="recipe__title">
          <span>{title}</span>
      </h1>
  </figure>
)

export default RecipeFigure;