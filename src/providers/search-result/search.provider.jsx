import React, { createContext, useState, useEffect } from 'react'

import { key } from '../../config.api'

export const SearchContext = createContext({
  searchResults: [],
  renderRecipe: false,
  searchQuery: '',
  maxPage: 1
});

const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState();
  const [renderRecipe, setRenderRecipe] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPage, setMaxPage] = useState(1)

  const fetchSearchResults = async () => {
    try{
      const searchResults = await fetch(`https://www.food2fork.com/api/search?key=${key}&q=${searchQuery}`)
              .then(data => data.json())
              .then(data => data.recipes)
      setSearchResults(searchResults);
      setMaxPage(() => Math.ceil(searchResults.length / 10))
      setRenderRecipe(true)
    } catch (error) {
      alert('Fetch Search Wrong :)');
    }
  }

  useEffect(() => { 
    if(searchQuery) fetchSearchResults()
  },[searchQuery])
  
  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        renderRecipe,
        setRenderRecipe,
        maxPage
      }}
    >
      { children }
    </SearchContext.Provider>
  )
}

export default SearchProvider;