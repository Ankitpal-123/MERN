import React from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../../context/Auth";
import toast from "react-hot-toast";

function Header() {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout succussfull");
  };
  return (
    <>
      <Navbar expand="lg" className="navbar bg-dark text-white">
        <Container fluid>
          <Navbar.Brand href="/" className="text-white font-bold ml-10">
            E-commerce
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="decoration-black"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="text-white home ">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-white home">
                Category
              </Nav.Link>
              {!auth.user ? (
                <>
                  <Nav.Link href="/register" className="text-white home">
                    Register
                  </Nav.Link>
                  <Nav.Link href="/login" className="text-white home">
                    Login
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Navbar.Collapse id="navbar-white-example">
                    <Nav>
                      <NavDropdown
                        id="nav-dropdown-white-example"
                        title={
                          <span className="text-white">{auth?.user?.name}</span>
                        }
                        menuVariant="white"
                      >
                        <NavDropdown.Item
                          href={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="text-black home "
                        >
                          DashBoard
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/login"
                          className="text-black home"
                          onClick={handleLogout}
                        >
                          logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </>
              )}
              <Nav.Link href="/cart" className="text-white home">
                Cart (0)
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
