import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import classes from "./navBar.module.css";

function NavBar() {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorChange(true);
     }
     else{
       setColorChange(false);
     }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    }
  }, []);

  return (
    <Navbar  expand="lg" className={`${colorChange ? classes.navbarcolor : classes.navbartransparent}`}  fixed="top">
      <Container>
        <Navbar.Brand href="#home" style={{ color: colorChange ? 'black' : 'white' }}>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto"  >
            <Nav.Link href="#home" style={{ color: colorChange ? 'black' : 'white' }}>Home</Nav.Link>
            <Nav.Link href="#link" style={{ color: colorChange ? 'black' : 'white' }}>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1" style={{ color: colorChange ? 'black' : 'white' }}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{ color: colorChange ? 'black' : 'white' }}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{ color: colorChange ? 'black' : 'white' }}>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{ color: colorChange ? 'black' : 'white' }}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
