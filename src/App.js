import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";
import HomeView from "./views/HomeView/HomeView";
import MoviesView from "./views/MoviesView/MoviesView";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies">
          <MoviesView />
        </Route>

        <Route>
          <HomeView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
