import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import "./RecipeGenerator.css";
import { Link } from "react-router-dom";

const RecipeGenerator = ( {selected, setSelected} ) => {
  const [produce, setProduce] = useState(null);
  console.log(selected);

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
    setSelected([...selected, produceClicked]);
  };

  const handleOnClickUnselect = (produceClicked) => {
    const index = selected.indexOf(produceClicked);
    // copy of selected to be mutated. Couldn't splice useState selected and return mutated array.
    let selectedCopy = selected;
    selectedCopy.splice(index, 1);
    setSelected(selectedCopy);
  };

  return (
    <div>
      <h1>Recipe Generator</h1>
      <h4>Choose produce then click Find Recipes to see what you can make</h4>
      <h5>Produce Chosen:</h5>
  {selected[0] ? <p>{selected[0]}</p> : null}
  {selected[1] ? <p>{selected[1]}</p> : null}
  {selected[2] ? <p>{selected[2]}</p> : null}
  {selected[3] ? <p>{selected[3]}</p> : null}
   <Link to={"/resultsrecipegenerator"}><Button>Find Recipes</Button></Link> 
      <div className="produceList">
        <CardColumns>
          {produce
            ? produce.map((produce) => {
                return (
                  <Card>
                    <Card.Img
                      variant="top"
                      src={produce.img}
                      alt={produce.name}
                    />
                    <Card.Body>
                      <Card.Title>{produce.name}</Card.Title>
                      {selected.includes(produce.name) ? (
                        <Button
                          onClick={() => handleOnClickUnselect(produce.name)}
                          variant="primary"
                        >
                          Unselect
                        </Button>
                      ) : (
                        <Button
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
