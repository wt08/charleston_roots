import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import "./RecipeGenerator.css";
import { Link } from "react-router-dom";

const RecipeGenerator = ({ selectedProduce, setSelectedProduce, setSelectedRecipe}) => {
  const [produce, setProduce] = useState(null);

  useEffect(() => {
    const makeAPICall = () => {
      axios
        .get(`https://srced-chs.herokuapp.com/produces`)
        .then((res) => {
          const data = res.data;
          setProduce(data);
        })
        .catch(console.error);
    };
    makeAPICall();
  }, []);

  const handleOnClickSelect = (produceClicked) => {
    setSelectedProduce([...selectedProduce, produceClicked]);
  };

  const handleOnClickUnselect = (produceClicked) => {
    const index = selectedProduce.indexOf(produceClicked);
    // copy of selectedProduce to be mutated. Couldn't splice useState selectedProduce and return mutated array.
    let selectedCopy = selectedProduce;
    selectedCopy.splice(index, 1);
    console.log(selectedCopy);
    // selctedCopy HAD to be passed as an array. State was not updating without array brackets.
    setSelectedProduce([...selectedCopy]);
  };

  return (
    <div className="recipeGenerator">
      <br />
      <br />
      <br />
      <br />
      <h1>Recipe Generator</h1>
      <br />
      <h4>
        Select produce from the list below, then click{" "}
        <span>Find Recipes.</span>
      </h4>
      <br />
      <h5>Produce Chosen:</h5>
      {selectedProduce[0] ? <p>{selectedProduce[0]}</p> : <p>None</p>}
      {selectedProduce[1] ? <p>{selectedProduce[1]}</p> : null}
      {selectedProduce[2] ? <p>{selectedProduce[2]}</p> : null}
      {selectedProduce[3] ? <p>{selectedProduce[3]}</p> : null}
      <Link to={"/resultsrecipegenerator"}>
        <Button className="recipeGenButton">Find Recipes</Button>
      </Link>
      <div className="produceList">
        <CardColumns>
          {produce
            ? produce.map((produce) => {
                return (
                  <Card key={produce.id}>
                    <Card.Img
                      variant="top"
                      src={produce.img}
                      alt={produce.name}
                    />
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        {produce.name}
                      </Card.Title>
                      {selectedProduce.includes(produce.name) ? (
                        <Button
                          className="recipeGenButton"
                          onClick={() => handleOnClickUnselect(produce.name)}
                          variant="primary"
                        >
                          Unselect
                        </Button>
                      ) : (
                        <Button
                          className="recipeGenButton"
                          onClick={() => handleOnClickSelect(produce.name)}
                          variant="primary"
                        >
                          Select
                        </Button>
                      )}
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

export default RecipeGenerator;
