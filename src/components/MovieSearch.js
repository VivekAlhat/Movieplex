import {
  MovieSearchBar,
  MovieSearchInput,
  SearchButton,
} from "./styled/styled";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchMovieByQuery } from "../thunks/thunks";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

const SearchIcon = styled(Search)`
  color: white;
`;

const MovieSearch = ({ loadMoviesOnSearch }) => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      alert("Query string should not be empty");
      history.push("/");
    } else {
      loadMoviesOnSearch(query);
      history.push(`/search/${query}`);
    }
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

const mapDispatchToProps = (dispatch) => ({
  loadMoviesOnSearch: (query) => dispatch(searchMovieByQuery(query)),
});

export default connect(null, mapDispatchToProps)(MovieSearch);
