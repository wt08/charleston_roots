import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import AccountSettings from "./components/AccountSettings/AccountSettings";

function App() {
  // const app_id = process.env.REACT_APP_app_id;
  // const app_key = process.env.REACT_APP_app_key;

  // useEffect(() => {
  //   const makeAPICall = () => {
  //     axios
  //       .get(`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`)
  //       .then((res) => {
  //         const data = res.data;
  //         console.log(data)
  //       })
  //       .catch(console.error);
  //   };
  //   makeAPICall();
  // }, []);

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
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
