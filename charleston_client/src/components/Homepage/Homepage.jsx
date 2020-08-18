import React, { useEffect, useState } from "react";
import Map from "../Map/Map";
import axios from "axios";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [markets, setMarkets] = useState(null);

  useEffect(() => {
    const makeAPICall = () => {
      axios
        .get(`https://srced-chs.herokuapp.com/markets`)
        .then((res) => {
          const data = res.data;
          setMarkets(data);
        })
        .catch(console.error);
    };
    makeAPICall();
  }, []);

  return (
    <div className="homepage">
      <br />
      <br />
      <h1>Sourced: Charleston</h1>
      <br />
      <br />
      <div className="homepageInfo">
      <h4>
        <span>Sourced: Charleston</span> helps you find and eat local produce.
      </h4>
      <h4>Find a nearby Farmers Market by entering your Zipcode below.</h4>
      <h4>
        Then, find out what to make with all that produce using our <Link className="recipeGenLink" to={"/recipegenerator"}>Recipe Generator.</Link>
      </h4>
      </div>
      {/* if markets variable has content, map over each element and create new object. Pass down this object */}
      <Map
        marketData={
          markets
            ? markets.map((market) => {
                return {
                  name: market.name,
                  address: market.address,
                  exits: market.exits,
                  coordinates: [market.long, market.lat],
                };
              })
            : null
        }
      />
    </div>
  );
};

export default Homepage;
