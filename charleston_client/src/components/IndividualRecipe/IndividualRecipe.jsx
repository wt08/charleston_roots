import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./IndividualRecipe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const IndividualRecipe = ({ user, selectedRecipe }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleOnClickFav = async (recipeUri) => {
    // reformat Uri using regex to make it edamam API searchable
    let format1 = recipeUri.replace(/:/g, "%3A");
    let format2 = format1.replace(/\//g, "%2F");
    let format3 = format2.replace(/#/g, "%23");

    const makeAPICall = (favUri) => {
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
    <div>
      <br />
      <br />
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
      <div className="individualRecipe">
        <Card>
          <Card.Title className="cardTitle">
            {selectedRecipe.label}{" "}
            <FontAwesomeIcon
              onClick={() => handleOnClickFav(selectedRecipe.uri)}
              className="star"
              icon={faStar}
            />
          </Card.Title>
          <Card.Img
            variant="top"
            src={selectedRecipe.image}
            alt={selectedRecipe.label}
          />
          <Card.Body>
            <h3>
              Full recipe found at{" "}
              <a
                href={selectedRecipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedRecipe.source}
              </a>
            </h3>
            <br />
            <h3>Ingredients:</h3>
            <ul>
              {selectedRecipe.label
                ? selectedRecipe.ingredientLines.map((ingredient) => {
                    return <p>{ingredient}</p>;
                  })
                : null}
            </ul>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default IndividualRecipe;
