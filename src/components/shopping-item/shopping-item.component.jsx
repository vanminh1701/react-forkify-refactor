import React from 'react'

import './shopping-item.styles.scss'



const ShoppingItem = ({ ingredient, handleClick }) => { 
  const { unit, content, count, id } = ingredient;
  return (
    <li className="shopping__item">
      <div className="shopping__count">
        <input type="number" defaultValue={count} step={count} min="0" />
        <p>{unit}</p>
      </div>

      <p className="shopping__description">{content}</p>
      
      <button 
        className="shopping__delete btn-tiny"
        onClick={() => handleClick(id)}  
      >
        <svg>
          <use href="img/icons.svg#icon-circle-with-cross"></use>
        </svg>
      </button>
    </li>
  )
}

export default ShoppingItem;
