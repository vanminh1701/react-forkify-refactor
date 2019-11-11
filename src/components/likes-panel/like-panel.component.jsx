import React, { useContext } from 'react'

import SearchItem from '../search-item/search-item.component'

import { RecipeContext } from '../../providers/recipe/recipe.providers'

import './like-panel.styles.scss'

const LikePanel = () => {
  const { likeList } = useContext(RecipeContext)
  return (
    <div className="likes__panel">
      <ul className="likes__list">
      {
        likeList.map(item => (<SearchItem key={item.recipe_id} result={item} />
          ))
      }
      {/* {
        likeList.map(item => (<LikeItem key={item.recipe_id} item={item} />
          ))
      } */}
      </ul>
  </div>
  )
}

export default LikePanel;