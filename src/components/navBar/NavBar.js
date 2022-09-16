import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/kabul.png';
import CartWidget from '../cartWidget/CartWidget.js';
import { Link } from 'react-router-dom';
import "../../style/itemCount.css"
import "../../style/navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Nabvar = () => {
  return (
    <div>
      <Navbar bg="light" expand="xl">
        <Container fluid className='colornav'>

          <Link to= '/'><img src={logo} alt="logo kabul" style={{ width: "188px", height: "150px" }} /></Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className='nav'>
                <Link to='/category/accesorios' className="text-white" >ACCESORIOS</Link>
                <Link to='/category/buzos'className="text-white" >BUZOS</Link>
                <Link to='/category/joggins' className="text-white" >JOGGINS</Link>
                <span className="barra">│</span>
                <Link href="#action7" className="text-white"  id="nav2">CONTACTO</Link>
                <Link href="#action7" className="text-white" id="nav3">INICIAR SESIÓN</Link>


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