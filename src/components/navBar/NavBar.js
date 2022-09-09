import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../img/kabul.png';
import CartWidget from '../cartWidget/CartWidget.js';
import "../../style/itemCount.css"
import "../../style/navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Nabvar = () => {
  return (
    <div>
      <Navbar bg="light" expand="xl">
        <Container fluid className='colornav'>
          <img src={logo} alt="logo kabul" style={{ width: "188px", height: "150px" }} />

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className= "nav">
                <NavDropdown title="CATEGORIAS " id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action1"> ACCESORIOS</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">
                    BUZOS
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    CAMPERAS
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    JOGGINS
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    REMERAS
                  </NavDropdown.Item>


                </NavDropdown>
                <Nav.Link href="#action6" className="text-white" >¿QUIENES SOMOS?</Nav.Link>
                <Nav.Link href="#action7" className="text-white" >CONTACTO</Nav.Link>
              </div>
            </Nav>

             <CartWidget> </CartWidget>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" >Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

export default Nabvar;