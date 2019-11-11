import React, { useContext } from 'react';

import LikePanel from '../likes-panel/like-panel.component'

import { RecipeContext } from '../../providers/recipe/recipe.providers';

import './likes.styles.scss';

const Likes = () => {
  const { likeList } = useContext(RecipeContext);
  return (
    <div className={`likes__field ${likeList.length ? "visible" : ""}`}>
      <svg className="likes__icon">
        <use href="img/icons.svg#icon-heart"></use>
      </svg>
      <LikePanel />
    </div>
  )
}

export default Likes;