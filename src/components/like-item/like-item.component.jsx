import React from 'react'

import './like-item.styles.scss'

const LikeItem = ({item}) => {
  const { recipe_id, image_url, publisher, title } = item
  return (
    <li>
      <a className="likes__link" href={recipe_id}>
          <figure className="likes__fig">
              <img src={image_url} alt="Test" />
          </figure>
          <div className="likes__data">
              <h4 className="likes__name">{title}</h4>
              <p className="likes__author">{publisher}</p>
          </div>
      </a>
    </li>
  )
}

export default LikeItem;