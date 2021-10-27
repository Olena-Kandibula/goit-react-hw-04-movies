import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";

const HomeView = lazy(() =>
  import("./views/HomeView/HomeView.js" /*webpackChunkName:"HomeView" */)
);
const MoviesView = lazy(() =>
  import("./views/MoviesView/MoviesView.js" /*webpackChunkName:"MoviesView" */)
);
const MovieDetailsView = lazy(() =>
  import(
    "./views/MovieDetailsView/MovieDetailsView.js" /*webpackChunkName:"MovieDetailsView" */
  )
);

function App() {
  return (
    <div className="App">
      <Navigation />

      <Suspense fallback={<h1>Loading ...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route>
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
