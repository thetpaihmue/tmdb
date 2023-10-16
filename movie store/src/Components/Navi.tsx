import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Navi.css";

const Navi = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand to="/" as={Link}>
            Movie Store
          </Navbar.Brand>
          <Nav.Link to="/movies" as={Link}>
            movies
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
