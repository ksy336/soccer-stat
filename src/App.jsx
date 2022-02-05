import React from "react";
import  {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import ListOfTeams from "./pages/ListOfTeams";
import MatchesOfLeague from "./pages/MatchesOfLeague";
import TeamsMatches from "./pages/TeamsMatches";
import Navbar from "./components/UI/Navbar";
import "./styles/App.css";
import Error from "./pages/ErrorPage";
import Leagues from "./pages/Leagues";


function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Switch >
            <Route path="/leagues">
                <Leagues />
            </Route>
            <Route path="/teams">
                <ListOfTeams />
            </Route>
            <Route path="/matches">
                <MatchesOfLeague />
            </Route>
            <Route path="/list">
                <TeamsMatches />
            </Route>
            <Route path="/error">
                <Error />
            </Route>
            <Redirect to="/error"/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
