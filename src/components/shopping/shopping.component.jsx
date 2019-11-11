import React from 'react'

import ShoppingList from '../shopping-list/shopping-list.component'

import './shopping.styles.scss'

const Shopping = () => (
  <div className="shopping">
    <h2 className="heading-2">My Shopping List</h2>
      <ShoppingList />
    <div className="copyright">
        &copy; by my teacher - Jonas. Powered by
        <a 
          href="http://food2fork.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link"
        >
          Food2Fork.com
        </a>.
    </div>
  </div>
)

export default Shopping;