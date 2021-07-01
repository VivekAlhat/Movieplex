import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AppContainer } from "./styled/styled";
import Sidebar from "./Sidebar";
import Movies from "./Movies";
import UserLists from "./UserLists";
import MovieSearch from "./MovieSearch";
import MovieDetails from "./MovieDetails";

function App() {
  let location = useLocation();

  const [currLoc, setCurrLoc] = useState("/");

  useEffect(() => {
    setCurrLoc(location.pathname);
  }, [location]);

  return (
    <>
      <Sidebar selected={currLoc} />
      <AppContainer>
        <MovieSearch />
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/favorites" component={UserLists} />
          <Route path="/watchlist" component={UserLists} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/search/:query" component={Movies} />
        </Switch>
      </AppContainer>
    </>
  );
}

export default App;
