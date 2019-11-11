import React, { useContext } from 'react'

import { RecipeContext } from '../../providers/recipe/recipe.providers';

import Shopping from '../shopping/shopping.component'

const ShoppingContainer = () => {
  const { renderShopping } = useContext(RecipeContext)
  if(renderShopping) 
    return (<Shopping />)
  else
    return ('')
}

export default ShoppingContainer;
