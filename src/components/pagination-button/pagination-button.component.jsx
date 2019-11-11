import React from 'react'

import './pagination-button.styles.scss'

const PaginationButton = ({ shape, page, status, onClick }) => (
  <button 
    className={`btn-inline results__btn--${status}`}
    onClick={onClick}
  >
      <svg className="search__icon">
          <use href={`../../img/icons.svg#icon-${shape}`}></use>
      </svg>
      <span>{`Page ${page}`}</span>
  </button>
)

export default PaginationButton;