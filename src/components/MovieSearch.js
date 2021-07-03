import {
  MovieSearchBar,
  MovieSearchInput,
  SearchButton,
} from "./styled/styled";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleTheme } from "../actions/actions";
import { getTheme } from "../selectors/selectors";
import { searchMovieByQuery } from "../thunks/thunks";
import { Button } from "@material-ui/core";
import { Search, Brightness7, Brightness3 } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

const SearchIcon = styled(Search)`
  color: white;
`;

const MovieSearch = ({ loadMoviesOnSearch, theme, toggleTheme }) => {
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
      <>
        {theme === "light" ? (
          <Button onClick={toggleTheme}>
            <Brightness3 />
          </Button>
        ) : (
          <Button onClick={toggleTheme}>
            <Brightness7 />
          </Button>
        )}
      </>
    </MovieSearchBar>
  );
};

const mapStateToProps = (state) => ({
  theme: getTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMoviesOnSearch: (query) => dispatch(searchMovieByQuery(query)),
  toggleTheme: () => dispatch(toggleTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
