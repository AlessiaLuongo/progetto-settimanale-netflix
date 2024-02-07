import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ComponentComments from "./ComponentComments";

const ComponentDetail = () => {
  const [detailFilm, setDetailFilm] = useState(null);

  const params = useParams();
  console.log(params.filmId);

  const detailFilmFetch = () => {
    fetch("http://www.omdbapi.com/?apikey=107edba2&s&i=" + params.filmId)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setDetailFilm(response);
      })
      .catch((err) => {
        console.log("Errore nella chiamata");
      });
  };
  useEffect(() => {
    if (params.filmId) {
      detailFilmFetch();
    }
  }, [params.filmId]);
  console.log(detailFilm);
  return (
    <Container>
      <Row className="justify-content-around">
        <Col xs={2} md={4} lg={4} className="d-flex">
          {detailFilm && (
            <Card className="w-50 ">
              <Card.Img variant="top" src={detailFilm.Poster} />
              <Card.Body className="d-flex flex-column ">
                <Card.Title className="text-center">
                  {detailFilm.Title}
                </Card.Title>
                <Card.Text className="text-center">
                  {detailFilm.Genre}
                </Card.Text>
                <Card.Text className="text-center">
                  {detailFilm.Actors}
                </Card.Text>
                <Card.Text className="text-center">{detailFilm.Year}</Card.Text>
                <Card.Text className="text-center">{detailFilm.Plot}</Card.Text>
              </Card.Body>
            </Card>
          )}
          <ComponentComments />
        </Col>
      </Row>
    </Container>
  );
};

export default ComponentDetail;
