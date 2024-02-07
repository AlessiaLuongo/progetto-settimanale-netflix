import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ComponentComments = (props) => {
  const params = useParams();
  console.log(params);

  const [commenti, setCommenti] = useState([]);
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("");
  const [elementId, setElementId] = useState(null);

  const fetchCommenti = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + params,

      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOTUwYjViMjYxNTAwMTk4YTY5MzYiLCJpYXQiOjE3MDY3OTIyMDMsImV4cCI6MTcwODAwMTgwM30.0Hw_LARiHlBjPQ38iVSzxWjnwfzE2jiyA3iahWrPFCM",
        },
      }
    )
      .then((response) => {
        console.log("risposta", response.json());
        return response.json();
      })
      .then((response) => {
        setCommenti(response);
      })
      .catch((err) => {
        console.log("Errore nella chiamata", err);
      });
  };
  fetchCommenti();
  return (
    <Col>
      <ListGroup>
        <ListGroup.Item>commento</ListGroup.Item>
      </ListGroup>
    </Col>
  );
};
export default ComponentComments;
