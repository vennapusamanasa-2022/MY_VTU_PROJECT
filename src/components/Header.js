import React from 'react';
import { Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';


const Header =() =>{

    return(
        <>
        <Navbar className ='navbar-style' expand="lg">
            <Container>
             <Navbar.Brand href="#">
                <Image className='logo-image-style' 
                 src="images\Visvesvaraya-logo.jpg" alt="VTU" roundedCircle />
                 <h6 className='logo-text-style'>Visvesvaraya Technological University,Belgavi</h6>
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            
            <Nav.Link href="#link">About us</Nav.Link>

            <NavDropdown title="Academic" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                <NavDropdown.Item href="#">Circular & Notification</NavDropdown.Item>
                <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>                
            </NavDropdown>

            <NavDropdown title="Examination" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
                <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
                <NavDropdown.Item href="#">Results</NavDropdown.Item>                
            </NavDropdown>
            
            <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>                            
            </NavDropdown>

            </Nav>
             </Navbar.Collapse>

            </Container>

        </Navbar>
        </>
    )
}
export default Header