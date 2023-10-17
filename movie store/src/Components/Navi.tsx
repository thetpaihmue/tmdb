import { useState } from "react";
import { Navbar, Container, Nav, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Navi.css";
import { useNavigate } from "react-router-dom";

const Navi = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      console.log("Performing search for:", searchTerm);
      navigate(`/movies?search=${searchTerm}`);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand to="/" as={Link}>
            Movie Store
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link to="/movies" as={Link}>
              Movies
            </Nav.Link>
          </Nav>
          <Nav className="w-100"></Nav>
          <Nav className="w-100"></Nav>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
