import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
              <div className='nav'>
                <Nav.Link href="#action7" className="text-white" >ACCESORIOS</Nav.Link>
                <Nav.Link href="#action7" className="text-white" >BUZOS</Nav.Link>
                <Nav.Link href="#action7" className="text-white" >JOGGINS</Nav.Link>
                <Nav.Link href="#action7" className="text-white"  id="nav2">CONTACTO</Nav.Link>
                <Nav.Link href="#action7" className="text-white" id="nav3">INICIAR SESIÓN</Nav.Link>


              </div>
              


            </Nav>



            <CartWidget> </CartWidget>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

export default Nabvar;