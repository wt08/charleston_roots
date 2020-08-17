import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const IndividualRecipe = ({ selectedRecipe }) => {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={selectedRecipe.image}
          alt={selectedRecipe.label}
        />
        <Card.Body>
          <Card.Title>{selectedRecipe.label}</Card.Title>
          <h3>Recipe found at {selectedRecipe.url}</h3>
          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.label ? selectedRecipe.ingredientLines.map((ingredient) => {
              return <li>{ingredient}</li>;
            }): null}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default IndividualRecipe;
