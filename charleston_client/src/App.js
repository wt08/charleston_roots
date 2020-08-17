import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import AccountSettings from "./components/AccountSettings/AccountSettings";
import RecipeGenerator from "./components/RecipeGenerator/RecipeGenerator";
import "bootstrap/dist/css/bootstrap.min.css";
import ResultsRecipeGenerator from "./components/ResultsRecipeGenerator/ResultsRecipeGenerator";

function App() {
  const [user, setUser] = useState(null);
  // variable to hold selected produce for Recipe Generator
  const [selected, setSelected] = useState([]);

  return (
    <div className="App">
      <Layout user={user}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/login"
            render={(routerProps) => (
              <Login {...routerProps} setUser={setUser} />
            )}
          />
          <Route
            path="/accountsettings"
            render={(routerProps) => (
              <AccountSettings {...routerProps} user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/recipegenerator"
            render={(routerProps) => (
              <RecipeGenerator
                {...routerProps}
                selected={selected}
                setSelected={setSelected}
              />
            )}
          />
          <Route
            path="/resultsrecipegenerator"
            render={(routerProps) => (
              <ResultsRecipeGenerator
                {...routerProps}
                selected={selected}
              />
            )}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
