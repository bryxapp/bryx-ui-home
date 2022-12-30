import { Nav, Navbar } from "react-bootstrap"

export const NavigationBar = () => {
  return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <h1>BRYX</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/templates">Templates</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/forms">Forms</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/past-estimates">Past Estimates</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};