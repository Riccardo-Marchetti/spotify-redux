import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <Col xs={2}>
      <Navbar
        // expand="lg"
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              style={{ width: "131px", height: "40px" }}
              alt="spotify logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarNavAltMarkup" className="collapse ">
            <Nav className="">
              <ListGroup className="ul">
                <ListGroup.Item className="li">
                  <Link
                    to={"/"}
                    className="text-decoration-none nav-item nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="li">
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="li">
                  <div className="input-group mt-3">
                    <Form>
                      <Row>
                        <Col xs={8} className="ms-2 px-0">
                          <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" "
                            aria-label="Search"
                          />
                        </Col>
                        <Col xs={3} className="px-0">
                          <Button className="btn btn-outline-secondary  butt-go h-100">
                            Go
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="d-flex flex-column justify-content-center ms-3">
          <Button className="btn signup-btn " type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <Nav.Link href="#home" className="a">
            Cookie Policy / Privacy
          </Nav.Link>
        </div>
      </Navbar>
    </Col>
  );
};
export default SideBar;
