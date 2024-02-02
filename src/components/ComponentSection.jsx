import { Component } from "react";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import SingleCard from "./SingleCard";

class ComponentSection extends Component {
  state = {
    film: [],
    isLoading: true,
    isError: false,
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
        this.setState({ film: dataFilms.Search, isLoading: false });
        console.log(dataFilms);
      })

      .catch((err) => {
        console.log(err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };
  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    return (
      <Row className="g-0 mb-5">
        {this.state.isLoading && <Spinner variant="success"></Spinner>}

        {!this.state.isLoading && this.state.isError ? (
          <Alert variant="warning">Nessun film trovato</Alert>
        ) : (
          this.state.film
            .slice(0, 6)
            .map((film) => <SingleCard film={film} key={film.imdbID} />)
        )}
      </Row>
    );
  }
}
export default ComponentSection;
