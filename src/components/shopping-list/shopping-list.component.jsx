import React, { useState, useContext } from 'react'

import ShoppingItem from '../shopping-item/shopping-item.component'

import { RecipeContext } from '../../providers/recipe/recipe.providers'

import './shopping-list.styles.scss'

const ShoppingList = () => {
  const { recipe:{ ingredients } } = useContext(RecipeContext);
  
  const [useIngredients, setIngredients] = useState(ingredients);

  const handleClick = idDelete => 
    setIngredients(useIngredients => 
      useIngredients.filter(el => el.id !== idDelete))

  return (
    <ul className="shopping__list">
    {
      useIngredients.map(ingredient => (
        <ShoppingItem 
          key={ingredient.id} 
          ingredient={ingredient} 
          handleClick={handleClick}
          />
      ))
    }
    </ul>
  )
}

export default ShoppingList;