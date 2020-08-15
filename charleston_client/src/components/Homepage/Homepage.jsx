import React, { useEffect, useState } from "react";
import Map from "../Map/Map";
import axios from "axios";
import "./Homepage.css";

const Homepage = () => {
  const [markets, setMarkets] = useState(null);
  console.log(markets);

  //   if (markets)
  //   {
  //       const eachMarket = markets.map(market => {
  //           return (
  //         {
  //             name: market.name,
  //             address: market.address,
  //             exits: market.exits,
  //             coordinates: [market.long, market.lat]
  //         }
  //           )
  //   })
  //   console.log(eachMarket)
  // }

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
    <div>
      <h1>Sourced: Charleston</h1>
      <h4>
        Welcome to Sourced: Charleston! The website that helps you find and eat
        local produce.
      </h4>
      <h4>
        Find a close Farmers Market by entering your Zipcode below and check out
        our Recipe Generator!
      </h4>
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
