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
  user,
  selectedProduce,
  selectedRecipe,
  setSelectedRecipe,
}) => {
  const recipe_api_id = process.env.REACT_APP_edamam_recipe_api_id;
  const recipe_api_key = process.env.REACT_APP_edamam_recipe_api_key;
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  const [favRecipe, setFavRecipe] = useState("");
  console.log("fav recipe - ", favRecipe);

  useEffect(() => {
    const makeAPICall = () => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${selectedProduce}&app_id=${recipe_api_id}&app_key=${recipe_api_key}`
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

  // *** WORK ON THIS ******
  const handleOnClickFav = async (recipeUri) => {
    // reformat Uri using regex to make it edamam API searchable
    let format1 = recipeUri.replace(/:/g, "%3A");
    let format2 = format1.replace(/\//g, "%2F");
    let format3 = format2.replace(/#/g, "%23");
    await setFavRecipe(format3);
    // axios({
    //   url: `http://srced-chs.herokuapp.com/users/${user.id}/favorites`,
    //   method: "POST",
    //   data: {
    //     uri: favRecipe,
    //     user_id: user.id,
    //   },
    // })
    //   .then(console.log('Success'))
    //   .catch(console.error);
  };

  return (
    <div className="resultsRecGen">
      <br/>
      <br/>
      <h1>Recipe Generator</h1>
      <br/>
      <h4>Results:</h4>
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
                      <Card.Title className="cardTitle">{recipe.recipe.label}</Card.Title>
                      <Button className="resultsButton" onClick={() => handleOnClickSelect(recipe)}>
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
      {/* if selectedRecipe has content, go to IndividualRecipe for that recipe */}
      {selectedRecipe.label ? <Redirect to="/individualRecipe" /> : null}
    </div>
  );
};

export default ResultsRecipeGenerator;
