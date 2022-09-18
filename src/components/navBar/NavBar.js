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
              <ul className='nav'>
                <li><Link to='/category/accesorios' className="text-white link" >ACCESORIOS</Link></li>
                <li><Link to='/category/buzos'className="text-white link" >BUZOS</Link></li>
                <li><Link to='/category/joggins' className="text-white link" >JOGGINS</Link></li>
                <span className="barra">│</span>
                <li><Link href="#action7" className="text-white link"  id="nav2">CONTACTO</Link></li>
                <li><Link href="#action7" className="text-white link" id="nav3">INICIAR SESIÓN</Link></li>


              </ul>
              


            </Nav>



            <CartWidget> </CartWidget>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

export default Nabvar;