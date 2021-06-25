import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContainer } from "./styled/styled";
import Sidebar from "./Sidebar";
import Latest from "./Latest";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";
import Genres from "./Genres";
import Favorites from "./Favorites";
import WatchList from "./WatchList";
import MovieSearch from "./MovieSearch";

function App() {
  return (
    <Router>
      <Sidebar />
      <AppContainer>
        <MovieSearch />
        <Switch>
          <Route path="/" exact component={Latest} />
          <Route path="/nowplaying" component={NowPlaying} />
          <Route path="/popular" component={Popular} />
          <Route path="/toprated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/genres" component={Genres} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/watchlist" component={WatchList} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
