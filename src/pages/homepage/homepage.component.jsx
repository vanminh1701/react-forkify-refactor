import React from 'react';

import './homepage.styles.scss';
import Header from '../../components/header/header.component'
import SearchResultContainer from '../../components/search-result-container/search-result.container'

import RecipeContainer from '../../components/recipe.container/recipe-conintaner.component'
import ShoppingContainer from '../../components/shopping-container/shopping-container.component'

import SearchProvider from '../../providers/search-result/search.provider'
import RecipeProvider from '../../providers/recipe/recipe.providers'


const HomePage = () => (
  <div className="container">
    <RecipeProvider>
      <SearchProvider>
        <Header />
        <SearchResultContainer />
      </SearchProvider>
      
      <RecipeContainer />
      <ShoppingContainer />
    </RecipeProvider>
  </div>
)

export default HomePage;