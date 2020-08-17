import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";

const FavRecipes = ({ user }) => {
  const [favs, setFavs] = useState(null);
  console.log(favs);
  const [singleFav, setSingleFav] = useState(null);
  console.log(singleFav);

  useEffect(() => {
    axios
      .get(`https://srced-chs.herokuapp.com/users/${user.id}`)
      .then((res) => setFavs(res.data.favorites))
      .catch(console.error);
  }, []);

 if(favs) { const eachFav = () => {
    favs.map((fav) => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?r=${fav.uri}&app_id=ef0f5e53&app_key=7a7046aac89468a188ddfff0efbb3812`
        )
        .then((res) => {
          setSingleFav(res.data);
        })
        .then(() => {
          return (
            <Card>
              <Card.Img
                variant="top"
                src={singleFav[0].image}
                alt={singleFav[0].label}
              />
              <Card.Body>
                <Card.Title>{singleFav[0].label}</Card.Title>
              </Card.Body>
            </Card>
          );
        })
        .catch(console.error);
    });
  } 
  console.log(eachFav())
}

  

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default FavRecipes;
