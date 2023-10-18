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
      <Navbar expand="lg" style={{ backgroundColor: "#0d253f" }}>
        <Container>
          <Navbar.Brand
            to="/"
            as={Link}
            style={{ color: " #90cea1", fontSize: "20px" }}
          >
            Movie Store
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link
              to="/movies"
              as={Link}
              style={{ color: "#fff", fontSize: "15px", paddingTop: "11px" }}
            >
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
