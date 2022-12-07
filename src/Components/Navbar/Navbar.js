import React from 'react'
import './Navbar.css'
import { Nav, Navbar,Button, Container, Form, FormControl } from 'react-bootstrap'
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import img1 from './logo.png'
import { useStateValue } from '../Body/Checkout/StateProvider';
import { Link } from 'react-router-dom';


export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
    return (
      <>
      <div className= "Navcss">
      <Navbar collapseOnSelect expand="lg">
       <Container>
  <Navbar.Brand><Link to="/"><img src = {img1} width = "50" height = "50"  /></Link> <strong> কারিগরেরadda</strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Navbar.Collapse className="justify-content-end">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <div className = "searchbar">
      <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success"><SearchIcon/></Button>
    </Form>
    </div>
      <Nav.Link href="/faq">FAQ</Nav.Link>
      <Nav.Link href="/contact-us">Contact us</Nav.Link>
    <Nav.Link href="/about-us">about us</Nav.Link>
    </Nav>
    <Nav.Link><Link to="/login">Sign in</Link></Nav.Link>
    <Nav.Link className="header__optionBasket"><Link to="/check-out"><ShoppingCartTwoToneIcon color="secondary" /></Link><span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span></Nav.Link>
  </Navbar.Collapse>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
</>

    )
}
