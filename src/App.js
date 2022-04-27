import React, { useState } from "react";

import { Card, CardBody, Button, Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Icon from "./components/Icon";
import "./App.css";

const itemsArray = new Array(9).fill("empty");
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemsArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[1] &&
      itemsArray[0] === itemsArray[2]
    ) {
      setWinMessage(`${itemsArray[0]} is the winner!`);
    } else if (
      itemsArray[3] !== "empty" &&
      itemsArray[3] === itemsArray[4] &&
      itemsArray[3] === itemsArray[5]
    ) {
      setWinMessage(`${itemsArray[3]} is the winner!`);
    } else if (
      itemsArray[6] !== "empty" &&
      itemsArray[6] === itemsArray[7] &&
      itemsArray[6] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[6]} is the winner!`);
    } else if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[3] &&
      itemsArray[0] === itemsArray[6]
    ) {
      setWinMessage(`${itemsArray[0]} is the winner!`);
    } else if (
      itemsArray[1] !== "empty" &&
      itemsArray[1] === itemsArray[4] &&
      itemsArray[1] === itemsArray[7]
    ) {
      setWinMessage(`${itemsArray[1]} is the winner!`);
    } else if (
      itemsArray[2] !== "empty" &&
      itemsArray[2] === itemsArray[5] &&
      itemsArray[2] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[2]} is the winner!`);
    } else if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[4] &&
      itemsArray[0] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[0]} is the winner!`);
    } else if (
      itemsArray[2] !== "empty" &&
      itemsArray[2] === itemsArray[4] &&
      itemsArray[2] === itemsArray[6]
    ) {
      setWinMessage(`${itemsArray[2]} is the winner!`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, {
        type: "success",
      });
    }

    if (itemsArray[itemNumber] === "empty") {
      itemsArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("This place is already taken", {
        type: "error",
      });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-center text-success">{winMessage}</h1>
              <Button color="primary" block onClick={reloadGame}>
                Reload Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Crosses" : "Circles"} turn
            </h1>
          )}
          <div className="grid">
            {itemsArray.map((item, index) => (
              <Card
                color="warning"
                onClick={() => {
                  changeItem(index);
                }}
              >
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
