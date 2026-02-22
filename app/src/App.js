
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="logo" alt="Octofit Tracker Logo" />
            Octofit Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/activities">Activities</Nav.Link>
              <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
              <Nav.Link href="/teams">Teams</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/workouts">Workouts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h1 className="mb-4">Welcome to Octofit Tracker</h1>
        {/* Add routing and component rendering here */}
      </Container>
    </div>
  );
}

