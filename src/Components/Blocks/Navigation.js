import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar color="transparent" inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">My Blog System</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
            <Link to="/dashboard">Dashboard</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/blog">Blog view</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
