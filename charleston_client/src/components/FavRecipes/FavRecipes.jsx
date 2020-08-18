import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import './FavRecipes.css'

const FavRecipes = ({ user }) => {
  // favs uri stored in custom backend
  const [userData, setUserData] = useState(null);
  console.log("userData -", userData);

  //   favs data from edamam API
  const [fullFavsData, setFullFavsData] = useState(null);
  console.log("fullFavsData-", fullFavsData);

  const reformatFavUris = (uris) => {
    let holder = [];
    for (let i = 0; i < uris.length; i++) {
      holder.push(`r=${uris[i].uri}&`);
    }
    return holder.join("");
  };

  const getFullRecipeData = (data) => {
    console.log("getFullRecipeData starting");
    axios
      .get(
        //   cors-anywhere is proxy server to get around CORS error
        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?${reformatFavUris(
          data.favorites
        )}app_id=ef0f5e53&app_key=7a7046aac89468a188ddfff0efbb3812`
      )
      .then((res) => {
        setFullFavsData(res.data);
      })
      .catch(console.error);
  };

  const getUserData = () => {
    axios
      .get(`https://srced-chs.herokuapp.com/users/${user.id}`)
      .then((res) => getFullRecipeData(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="favRecipes">
      <br/>
      <br/>
      <br/>
      <h1>Favorite Recipes</h1>
      <div className="favList">
      <CardColumns>
        {fullFavsData
          ? fullFavsData.map((fav) => {
              return (
                <Card key={fav.uri}>
                  <Card.Img variant="top" src={fav.image} alt={fav.label} />
                  <Card.Body>
                    <Card.Title className="cardTitleFav">{fav.label}</Card.Title>
                    {/* <Button onClick={() => handleOnClickSelect(recipe)}>
                Select
              </Button>
              <FontAwesomeIcon
                onClick={() => handleOnClickFav(recipe.recipe.uri)}
                className="star"
                icon={faStar}
              /> */}
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </CardColumns>
      </div>
    </div>
  );
};

export default FavRecipes;
