import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './Home';
import Veg from './Veg';
import Milk from './Milk';
import Cart from './Cart';
import Orders from './Orders';
import Nonveg from './Nonveg';
import Desserts from './Desserts';
import Aboutus from './Aboutus';
import Signin from './Signin';
import Signup from './Signup';
import Drinks from './Drinks';
import Chocolates from './Chocolates';


function App() {
  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="px-3">
        <Navbar.Brand as={Link} to="/">Fresh Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-between align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/veg">Veg</Nav.Link>
            <Nav.Link as={Link} to="/nonveg">Non-Veg</Nav.Link>
            <Nav.Link as={Link} to="/milk">Milk</Nav.Link>
            <Nav.Link as={Link} to="/drinks">Drinks</Nav.Link>
            <Nav.Link as={Link} to="/chocolates">Chocolates</Nav.Link>
            <Nav.Link as={Link} to="/Desserts">Desserts</Nav.Link>
            <Nav.Link as={Link} to="/Orders">Orders</Nav.Link>
            <Nav.Link as={Link} to="/Aboutus">Aboutus</Nav.Link>
            <Nav.Link as={Link} to="/Signin">Signin</Nav.Link>
            <Nav.Link as={Link} to="/Signup">Signup</Nav.Link>

            <Nav.Link as={Link} to="/cart">
              Cart {cartCount > 0 && <Badge bg="success">{cartCount}</Badge>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/milk" element={<Milk />} />
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/chocolates' element={<Chocolates />} />
        <Route path="/Desserts" element={<Desserts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;
