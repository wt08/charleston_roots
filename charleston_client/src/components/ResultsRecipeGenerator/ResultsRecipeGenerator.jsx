import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";

const ResultsRecipeGenerator = ({ selected }) => {
  const recipe_api_id = process.env.REACT_APP_edamam_recipe_api_id;
  const recipe_api_key = process.env.REACT_APP_edamam_recipe_api_key;
  const [recipes, setRecipes] = useState([]);
  console.log(recipes)

  useEffect(() => {
    const makeAPICall = () => {
      axios
        .get(
          `https://api.edamam.com/search?q=${selected}&app_id=${recipe_api_id}&app_key=${recipe_api_key}`
        )
        .then((res) => {
          const data = res.data;
          setRecipes(data.hits);
        })
        .catch(console.error);
    };
    makeAPICall();
  }, []);

  return (
    <div>
      <h1>Recipe Generator</h1>
      <h4>Results:</h4>
      <CardColumns>
      {recipes[0]
        ? recipes.map((recipe) => {
            return (
              <Card>
                  {/*                       API data has nested recipe object  */}
                <Card.Img variant="top" src={recipe.recipe.image} alt={recipe.recipe.label} />
                <Card.Body>
                  <Card.Title>{recipe.recipe.label}</Card.Title>
                  <Button>Select</Button>
                </Card.Body>
              </Card>
            );
          })
        : null}
        </CardColumns>
    </div>
  );
};

export default ResultsRecipeGenerator;
