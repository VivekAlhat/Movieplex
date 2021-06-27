import {
  MovieSearchBar,
  MovieSearchInput,
  SearchButton,
} from "./styled/styled";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { useState } from "react";

const SearchIcon = styled(Search)`
  color: white;
`;

const MovieSearch = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
  };

  return (
    <MovieSearchBar>
      <SearchIcon />
      <form onSubmit={handleSubmit}>
        <MovieSearchInput
          placeholder="Search Movies"
          value={query}
          onChange={handleChange}
          autoComplete="off"
        />
        <SearchButton></SearchButton>
      </form>
    </MovieSearchBar>
  );
};

export default MovieSearch;
