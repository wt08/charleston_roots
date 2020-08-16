import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import AccountSettings from "./components/AccountSettings/AccountSettings";
import RecipeGenerator from "./components/RecipeGenerator/RecipeGenerator";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // const recipe_api_id = process.env.REACT_APP_edamam_recipe_api_id;
  // const recipe_api_key = process.env.REACT_APP_edamam_recipe_api_key;

  // useEffect(() => {
    //     const makeAPICall = () => {
    //       axios
    //         .get(
    //           `https://api.edamam.com/search?q=chicken&app_id=${recipe_api_id}&app_key=${recipe_api_key}`
    //         )
    //         .then((res) => {
    //           const data = res.data;
    //           console.log(data);
    //         })
    //         .catch(console.error);
    //     };
    //     makeAPICall();
    //   }, []);

  const [user, setUser] = useState(null);

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
            render={(routerProps) => <RecipeGenerator {...routerProps} />}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
