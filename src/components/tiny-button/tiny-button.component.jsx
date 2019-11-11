import React from 'react'

import './tiny-button.styles.scss'


const TinyButton = ({ shape, changeServings }) => {
  return (
    <button 
      className="btn-tiny" 
      onClick={() => {if (changeServings) return changeServings()}}
    >
      <svg>
          <use href={`../../img/icons.svg#icon-circle-with-${shape}`}></use>
      </svg>
    </button>
  )
}

export default TinyButton;