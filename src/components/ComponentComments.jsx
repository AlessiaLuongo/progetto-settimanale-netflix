import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ComponentComments = () => {
  const params = useParams();
  console.log(params);
  const [commenti, setCommenti] = useState([]);

  const fetchCommenti = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + params.filmId,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOTUwYjViMjYxNTAwMTk4YTY5MzYiLCJpYXQiOjE3MDY3OTIyMDMsImV4cCI6MTcwODAwMTgwM30.0Hw_LARiHlBjPQ38iVSzxWjnwfzE2jiyA3iahWrPFCM",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();

        setCommenti(data);
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCommenti();
  }, [params]);
  return (
    commenti.length && (
      <Col className="ms-5">
        <ListGroup>
          {commenti.map((commento) => {
            return (
              <ListGroup.Item key={commento.elementId}>
                {commento.comment} - Voto - &gt; {commento.rate}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
    )
  );
};
export default ComponentComments;
