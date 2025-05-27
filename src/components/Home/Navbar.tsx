import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function CollapsibleNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const queryParams = new URLSearchParams(location.search);
  const currentRegion = queryParams.get("region")?.toLowerCase() || "all";

  const [selected, setSelected] = useState<string>(currentRegion);

  useEffect(() => {
    setSelected(currentRegion);
  }, [currentRegion]);

  const handleRegionSelect = (key: string | null) => {
    if (key) {
      const params = new URLSearchParams(location.search);
      if (key === "all") {
        params.delete("region");
      } else {
        params.set("region", key);
      }
      navigate(`?${params.toString()}`);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const activeStyle: React.CSSProperties = {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    fontWeight: "bold",
    color: "#000000",
  };

  const defaultStyle: React.CSSProperties = {
    color: "#6c757d",
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/home" style={{ fontWeight: "bold" }}>
          Countries
        </Navbar.Brand>
        <Button
          variant="outline-danger"
          onClick={handleLogout}
          style={{
            display: "none",
            marginLeft: "20px",
          }}
          className="d-none d-lg-inline-block ml-auto"
        >
          
          <i className="fas fa-sign-out-alt" style={{ color: "red" }} />
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto"
            onSelect={handleRegionSelect}
            activeKey={selected}
          >
            <Nav.Link
              eventKey="all"
              style={selected === "all" ? activeStyle : defaultStyle}
            >
              All
            </Nav.Link>
            <Nav.Link
              eventKey="asia"
              style={selected === "asia" ? activeStyle : defaultStyle}
            >
              Asia
            </Nav.Link>
            <Nav.Link
              eventKey="europe"
              style={selected === "europe" ? activeStyle : defaultStyle}
            >
              Europe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;
