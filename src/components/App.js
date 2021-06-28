import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AppContainer } from "./styled/styled";
import Sidebar from "./Sidebar";
import Movies from "./Movies";
import Genres from "./Genres";
import Favorites from "./Favorites";
import WatchList from "./WatchList";
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
          <Route path="/genres" component={Genres} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/watchlist" component={WatchList} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
      </AppContainer>
    </>
  );
}

export default App;
