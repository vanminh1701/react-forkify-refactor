import React, { useContext } from "react";

import SearchResult from "../search-result/search-result.component";
import { SearchContext } from "../../providers/search-result/search.provider";

const SearchResultContainer = () => {
  const { searchQuery } = useContext(SearchContext);
  if (searchQuery) {
    return <SearchResult />;
  } else return ('')
};

export default SearchResultContainer;
