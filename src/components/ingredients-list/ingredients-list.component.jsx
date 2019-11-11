import React, { useContext } from "react";


import RecipeIngredient from "../recipe-ingredient/recipe-ingredient.component";

import { RecipeContext } from "../../providers/recipe/recipe.providers";

import "./ingredients-list.styles.scss";

const IngredientsList = () => { 
  const { recipe: {ingredients} } = useContext(RecipeContext);

  return (
  <ul className="recipe__ingredient-list">
    {
      ingredients.map(ingredient => (
        <RecipeIngredient key={ingredient.id} ingredient={ingredient} />
      ))
    }
  </ul>
)
  }


export default IngredientsList;
