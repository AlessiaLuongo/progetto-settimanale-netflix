import { Component } from "react";
import Row from "react-bootstrap/Row";

import SingleCard from "./SingleCard";

class ComponentSection extends Component {
  state = {
    film: [],
  };
  fetchFilms = () => {
    fetch("http://www.omdbapi.com/?apikey=107edba2&s=" + this.props.cerca)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((dataFilms) => {
        this.setState({ film: dataFilms.Search });
        console.log(dataFilms);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    return (
      <Row className="g-0 mb-5">
        {this.state.film.length > 0 &&
          this.state.film.slice(0, 6).map((film) => {
            return <SingleCard film={film} key={film.imdbID} />;
          })}
      </Row>
    );
  }
}
export default ComponentSection;
