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
import IndividualRecipe from './components/IndividualRecipe/IndividualRecipe'
import FavRecipes from './components/FavRecipes/FavRecipes'

function App() {
  const [user, setUser] = useState(null);
  // variable to hold selected produce from Recipe Generator
  const [selectedProduce, setSelectedProduce] = useState([]);
  // variable to hold selected recipe from Results Recipe Generator
  const [selectedRecipe, setSelectedRecipe] = useState({});
  console.log(selectedRecipe)
  const [favRecipes, setFavRecipes] = useState([])

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
                selectedProduce={selectedProduce}
                setSelectedProduce={setSelectedProduce}
              />
            )}
          />
          <Route
            path="/resultsrecipegenerator"
            render={(routerProps) => (
              <ResultsRecipeGenerator
                {...routerProps}
                selectedProduce={selectedProduce}
                selectedRecipe={selectedRecipe}
                setSelectedRecipe={setSelectedRecipe}
              />
            )}
          />
            <Route
            path="/individualrecipe"
            render={(routerProps) => (
              <IndividualRecipe
                {...routerProps}
                selectedRecipe={selectedRecipe}
              />
            )}
          />
           <Route
            path="/favrecipes"
            render={(routerProps) => (
              <FavRecipes
                {...routerProps}
              />
            )}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
