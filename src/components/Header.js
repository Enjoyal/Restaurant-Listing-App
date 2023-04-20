import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn.dribbble.com/users/371094/screenshots/4607398/dribble.gif"
              width="50"
              height="50"
              className="d-inline-block rounded-circle"
            />{' '}
             &nbsp;Restaurant Listing App
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header