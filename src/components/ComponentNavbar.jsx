import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const ComponentNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="px-2">
      <Navbar.Brand>
        <img
          alt="logo"
          width="150px"
          height="60px"
          src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" style={{ color: "white" }} to="/">
            Home
          </Link>
          <Link className="nav-link" style={{ color: "white" }} to="/">
            TV Shows
          </Link>
          <Link className="nav-link" style={{ color: "white" }} to="/">
            Movies
          </Link>
          <Link className="nav-link" style={{ color: "white" }} to="/">
            Recently Addes
          </Link>
          <Link className="nav-link" style={{ color: "white" }} to="/">
            My List
          </Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">
            <i className="bi bi-search" style={{ color: "white" }}></i>
          </Nav.Link>
          <Link className="nav-link" style={{ color: "white" }} to="/profile">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              width="40px"
              height="30px"
              alt="logo"
              className="img-fluid bg-primary"
            />
          </Link>
          <Nav.Link href="#">
            <i className="bi bi-bell" style={{ color: "white" }}></i>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
              width="40px"
              height="30px"
              alt="logo"
              className="img-fluid bg-primary"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default ComponentNavbar;
