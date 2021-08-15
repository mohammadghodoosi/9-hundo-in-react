import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import '../Style.css'
import infinity from '../img/infinityW.png'

const Tabs = () => {

  return ( <>
    <Navbar 
     style={{ height:'55px',marginBottom:'20px'}} 
     variant={'dark'} 
     bg='dark' 
     expand="md">
   <Container>
     <Navbar.Brand 
     id='navBrand'> 
      <img id='navLogo' 
      src={infinity}/>
      React-Bootstrap
     </Navbar.Brand>
     <Navbar.Toggle 
     aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav 
       id="navLink"
      className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/App">App</Nav.Link>
        <Nav.Link as={Link} to="/Code">Code</Nav.Link>
        <Nav.Link as={Link} to="/Git">Git Repo</Nav.Link>
        <Nav.Link as={Link} to="/About">About</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
  </> );
}
 
export default Tabs;
