import React, { useContext } from "react";

import { SearchContext } from "../../providers/search-result/search.provider";

import Loader from "../loader/loader.component";

const WithRender = WrapedComponent => ({ renderCondition, ...otherProps }) => {
  switch(renderCondition) {
    case "isFetched":
    case true:
      return (
        <WrapedComponent {...otherProps} />
      )
    case "isFetching":
      return (
        <Loader />
      )
    default:
      return ('')
  }
}
export default WithRender;
