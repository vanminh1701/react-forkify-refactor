import React, { useState, useContext } from 'react';

import InputForm from '../input-form/input-form.component';
import CustomButton from '../custom-button/custom-button.component'

import { SearchContext } from '../../providers/search-result/search.provider'

import './search-form.styles.scss'


const SearchForm = () => {
  const { setSearchQuery } = useContext(SearchContext)
  const [query, setQuery] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    setSearchQuery(query);
    setQuery('');
  }

  const handleChange = event => setQuery(event.target.value)

  return (
    <form className="search__field" onSubmit={handleSubmit}>
      <InputForm 
        name="search-input"
        type="text"
        handleChange={handleChange}
        value={query}
      />
      <CustomButton type="submit" shape={"magnifying-glass"} chidren={"SEARCH"}/>
    </form>
  )
}

export default SearchForm;