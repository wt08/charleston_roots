import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import './RecipeGenerator.css'

const RecipeGenerator = () => {

const [produce, setProduce] = useState(null)
console.log(produce)

  useEffect(() => {
    const makeAPICall = () => {
      axios
        .get(
          `https://srced-chs.herokuapp.com/produces`
        )
        .then((res) => {
          const data = res.data;
          setProduce(data)
        })
        .catch(console.error);
    };
    makeAPICall();
  }, []);

  return (
    <div>
      <h1>Recipe Generator</h1>
      <h4>Choose up to 4 and then click Find Recipes</h4>
      <div className="produceList">
      <CardColumns>
      {produce ? produce.map(produce => {
          return (
            <Card>
            <Card.Img variant="top" src={produce.img} alt={produce.name}/>
            <Card.Body>
          <Card.Title>{produce.name}</Card.Title>
              <Button variant="primary">Select</Button>
            </Card.Body>
          </Card> 
          )
      }): null}
      </CardColumns>
      </div>
    </div>
  );
};

export default RecipeGenerator;

// ("https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=21fd5cef&app_key=8e8a1cd5bc1665401713d3f285622dc6");
