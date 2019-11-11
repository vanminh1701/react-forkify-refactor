import React, { useState, useContext } from "react";

import PaginationButton from "../pagination-button/pagination-button.component";

import { SearchContext } from "../../providers/search-result/search.provider";

import "./pagination-buttons.styles.scss";

const PaginationButtons = ({ changePage }) => {
  const [usePage, setPage] = useState(1);
  const { maxPage } = useContext(SearchContext)

  const clickNextPage = () => {
    setPage(page => page + 1);
    changePage(usePage);
  };

  const clickPreviousPage = () => {
    setPage(page => page - 1);
    changePage(usePage);
  };

  if (usePage === 1) {
    return (
      <div className="results__pages">
        <PaginationButton
          shape={"triangle-right"}
          page={2}
          status={"next"}
          onClick={clickNextPage}
        />
      </div>
    )
  } else if (usePage < maxPage) {
    return (
      <div className="results__pages">
        <PaginationButton
          shape={"triangle-left"}
          page={usePage - 1}
          status={"prev"}
          onClick={clickPreviousPage}
        />
        <PaginationButton
          shape={"triangle-right"}
          page={usePage + 1}
          status={"next"}
          onClick={clickNextPage}
        />
      </div>
    )
  } else if (usePage === maxPage) {
    return (
      <div className="results__pages">
        <PaginationButton
          shape={"triangle-left"}
          page={usePage - 1}
          status={"prev"}
          onClick={clickPreviousPage}
        />
      </div>
    )
  }
};

export default PaginationButtons;
