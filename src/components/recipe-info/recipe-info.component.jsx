import React, { useContext } from "react";

import TinyButtons from "../tiny-buttons/tiny-buttons.component";

import { RecipeContext } from "../../providers/recipe/recipe.providers";

import "./recipe-info.styles.scss";

const RecipeInfo = () => {
  const { time, servings } = useContext(RecipeContext)
  return (
    <div className="recipe__info-container">
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href="../../img/icons.svg#icon-stopwatch"></use>
        </svg>
        <span className="recipe__info-data">{time}</span>
        <span className="recipe__info-text"> MINUTES</span>
      </div>
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href="../../img/icons.svg#icon-man"></use>
        </svg>
        <span className="recipe__info-data">{servings}</span>
        <span className="recipe__info-text"> SERVINGS</span>
        <TinyButtons />
      </div>
    </div>
  );
};


export default RecipeInfo;
