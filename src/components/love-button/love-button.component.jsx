import React, { useContext } from 'react'

import { RecipeContext } from '../../providers/recipe/recipe.providers'

import './love-button.styles.scss'

// const handleClick = (recipe, list) => {
//   const recipeID = recipe.recipe_id;
//   if(!list.length || (list.findIndex(el => el.recipe_id === recipeID) === -1)) {
//     recipe.isLike = true;
//     list.push(recipe)
//     return likeRecipe(list.slice());
//   } else {
//     return unlikeRecipe(list.filter(el => el.recipe_id !== recipeID));
//   }
// }


const LoveButton = () => {
  const { handleLoveButton, likeList, recipeID } = useContext(RecipeContext);

  return (
    <button 
      className="recipe__love"
      onClick={() => handleLoveButton()}
    >
        <svg className="header__likes">
            <use href={`../../img/icons.svg#icon-heart${!!likeList.find(el => el.recipe_id === recipeID) ? "" : "-outlined"}`}></use>
        </svg>
    </button>
  )
}

export default LoveButton;