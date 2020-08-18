import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import "./ResultsRecipeGenerator.css";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Modal from "react-bootstrap/Modal";

const ResultsRecipeGenerator = ({
  user,
  selectedProduce,
  selectedRecipe,
  setSelectedRecipe,
  routerProps,
}) => {
  const recipe_api_id = process.env.REACT_APP_edamam_recipe_api_id;
  const recipe_api_key = process.env.REACT_APP_edamam_recipe_api_key;
  const [recipes, setRecipes] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const makeAPICall = () => {
      axios
        .get(
          `https://api.edamam.com/search?q=${selectedProduce}&app_id=${recipe_api_id}&app_key=${recipe_api_key}`
        )
        .then((res) => {
          const data = res.data;
          setRecipes(data.hits);
        })
        .catch(console.error);
    };
    makeAPICall();
  }, []);

  const handleOnClickSelect = async (recipe) => {
    //   API has nested recipe object
    await setSelectedRecipe(recipe);
    routerProps.history.push("/individualrecipe");
  };

  const handleOnClickFav = async (recipeUri) => {
    // reformat Uri using regex to make it edamam API searchable
    let format1 = recipeUri.replace(/:/g, "%3A");
    let format2 = format1.replace(/\//g, "%2F");
    let format3 = format2.replace(/#/g, "%23");

    const makeAPICall = (favUri) => {
      console.log("API call starting");
      axios({
        url: `https://srced-chs.herokuapp.com/users/${user.id}/favorites`,
        method: "POST",
        data: {
          uri: favUri,
          user_id: user.id,
        },
      })
        .then(console.log("Success"))
        .then(setShow(true))
        .catch(console.error);
    };

    makeAPICall(format3);
  };

  return (
    <div className="resultsRecGen">
      <br />
      <br />
      <h1>Recipe Generator</h1>
      <br />
      <h4>Results:</h4>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Added to Favorites!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="resultsList">
        <CardColumns>
          {recipes[0]
            ? recipes.map((recipe) => {
                return (
                  <Card key={recipe.recipe.uri}>
                    {/* API data has nested recipe object  */}
                    <Card.Img
                      variant="top"
                      src={recipe.recipe.image}
                      alt={recipe.recipe.label}
                    />
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        {recipe.recipe.label}
                      </Card.Title>
                      <Button
                        className="resultsButton"
                        onClick={() => handleOnClickSelect(recipe.recipe)}
                      >
                        Select
                      </Button>
                      <FontAwesomeIcon
                        onClick={() => handleOnClickFav(recipe.recipe.uri)}
                        className="star"
                        icon={faStar}
                      />
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

export default ResultsRecipeGenerator;
