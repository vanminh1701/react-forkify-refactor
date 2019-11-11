import React, { useState, useContext } from "react";

import { SearchContext } from '../../providers/search-result/search.provider'

import SearchItem from "../search-item/search-item.component";
import PaginationButtons from "../pagination-buttons/pagination-buttons.component";
import Loader from '../loader/loader.component'

const SearchResult = () => {
  const { renderRecipe, searchResults } = useContext(SearchContext)
  const [usePage, setPage] = useState(1);

  const changePage = nextPage => setPage(nextPage);
  const start = (usePage - 1) * 10;
  const end = usePage * 10;
  if (renderRecipe)
    return (
    <div className="results">
      <ul className="results__list">
        {searchResults.slice(start, end).map(result => (
          <SearchItem key={result.recipe_id} result={result} />
        ))}
      </ul>
      <PaginationButtons changePage={changePage} />
    </div>
  )
  else return (
    <Loader />
  )
};


export default SearchResult;
