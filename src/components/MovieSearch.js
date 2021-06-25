import {
  MovieSearchBar,
  MovieSearchInput,
  SearchButton,
} from "./styled/styled";
import { SearchRounded } from "@material-ui/icons";
import { useState } from "react";

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
      <SearchRounded />
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
