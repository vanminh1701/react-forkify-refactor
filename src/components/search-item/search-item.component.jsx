import React, { useContext } from 'react'
import { limitRecipeTitle } from '../../providers/search-result/search-item.utils'

import { RecipeContext } from '../../providers/recipe/recipe.providers'

import './search-item.styles.scss'

const SearchItem = ({result}) => {
  const { setRecipeID, setRenderShopping } = useContext(RecipeContext)
  const { image_url, title, publisher, recipe_id } = result;
  return (
    <div
      className="results__link"
      onClick={() => {
        setRecipeID(recipe_id);
        setRenderShopping(false);
      }}
    >
      <figure className="results__fig">
        <img src={image_url} alt="Test" />>
      </figure>
      <div className="results__data">
        <h4 className="results__name">{limitRecipeTitle(title)}</h4>
        <span className="results__author">{publisher}</span>
      </div>
    </div>
  );
};


export default SearchItem;