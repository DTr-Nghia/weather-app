import React, {useState} from 'react';
import styled from "styled-components";
import { useSearchContext } from "../context/SearchContext";
const Search = () => {
  const {updateSearch} = useSearchContext()
  const [value,setValue] = useState('')

  const handleSearch = (e) => {
    setValue(e.target.value)
  }
  return (
    <Wrapper>
      <form className="search-form">
        <input type="text" className="form-control" value={value} placeholder="Search" title="Press city name then Enter" autoFocus onChange={handleSearch}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === 'Escape') {
            updateSearch(value)
            setValue('')
            event.preventDefault()
            event.stopPropagation()}}}
        />
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .search-form {
    margin-bottom: 1rem;
    .form-control {
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #c2dbfe;
      color: #212529;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      :focus {
        outline: none;
        border-color: #c2dbfe;
        box-shadow: #c2dbfe 0px 0px 0px 4px;
      }
    }
  }
`;
export default Search;
