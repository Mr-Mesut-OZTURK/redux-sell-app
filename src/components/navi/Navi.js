import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Navbar,
} from 'reactstrap';

import CartSummery from '../cart/CartSummery';


const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 5px;
  margin: 5px 20px;
  display: inline-block;
  &:hover {
    color: violet;
  }
  @media (max-width:720px){
    margin: 0;
  }
`;

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="primary" light expand="md" style={{padding:"10px 10px"}}>

      <NavbarBrand>
        <h3 style={{ color:"white"}}>MESUT</h3>
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>

          <MyLink to="/" >
            HOME
          </MyLink>

          <CartSummery />

          <NavItem>
            <NavLink style={{color:"white"}} href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>

        </Nav>
      </Collapse>

    </Navbar>
  );
}

export default Example;