import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const SingleCard = (props) => {
  return (
    <Col xs={6} md={4} lg={2}>
      <Card className="h-100" style={{ backgroundColor: "transparent" }}>
        <Card.Img
          style={{ border: 0 }}
          src={props.film.Poster}
          className="img-thumbnail p-0 h-100"
          alt="film"
          key={props.film.imdbID}
        />
      </Card>
    </Col>
  );
};
export default SingleCard;
