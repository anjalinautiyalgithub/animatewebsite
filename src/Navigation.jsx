import React from 'react';
import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';

const Navigation=()=>{
    return(
      <>
      <div className='row'>
       <div className='col-10 mx-auto'>
<Navbar bg="" expand="lg" varient="white"  >
  <Container className='navi'>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/" className='links'>Home</Nav.Link>
        <Nav.Link href="/services" className='links'>Services</Nav.Link>
        <Nav.Link href="/about" className='links'>About</Nav.Link>
        <Nav.Link href="/contact" className='links'>Contact</Nav.Link>
        <NavDropdown title="Dropdown" className='links' id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
</div>
      
      
      </>



    )
}

export default Navigation;