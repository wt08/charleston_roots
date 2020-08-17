import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import "./ResultsRecipeGenerator.css";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const ResultsRecipeGenerator = ({
  selectedProduce,
  selectedRecipe,
  setSelectedRecipe,
  favRecipes,
  setFavRecipes,
}) => {
  const recipe_api_id = process.env.REACT_APP_edamam_recipe_api_id;
  const recipe_api_key = process.env.REACT_APP_edamam_recipe_api_key;
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

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

  const handleOnClickSelect = (recipe) => {
    //   API has nested recipe object
    setSelectedRecipe(recipe.recipe);
  };

  const handleOnClickFav = (recipeUri) => {
    // reformat Uri using regex to make it edamam API searchable
    let format1 = recipeUri.replace(/:/g, "%3A");
    let format2 = format1.replace(/\//g, "%2F");
    let format3 = format2.replace(/#/g, "%23");
    setFavRecipes([
      ...favRecipes,
      format3]);
  };

  return (
    <div>
      <h1>Recipe Generator</h1>
      <h4>Results:</h4>
      <div className="resultsList">
        <CardColumns>
          {recipes[0]
            ? recipes.map((recipe) => {
                return (
                  <Card>
                    {/* API data has nested recipe object  */}
                    <Card.Img
                      variant="top"
                      src={recipe.recipe.image}
                      alt={recipe.recipe.label}
                    />
                    <Card.Body>
                      <Card.Title>{recipe.recipe.label}</Card.Title>
                      <Button onClick={() => handleOnClickSelect(recipe)}>
                        Select
                      </Button>
                      <FontAwesomeIcon
                        onClick={() =>
                          handleOnClickFav(recipe.recipe.uri)
                        }
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
      {/* if selectedRecipe has content, go to IndividualRecipe for that recipe */}
      {selectedRecipe.label ? <Redirect to="/individualRecipe" /> : null}
    </div>
  );
};

export default ResultsRecipeGenerator;
