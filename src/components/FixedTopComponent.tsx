import React from 'react';
import { Navbar } from 'react-bootstrap';
import './style.css';

function FixedTop() {
  return (
    <div>
      <Navbar bg="light" sticky="top">
        <Navbar.Brand href="#home">
          눈송 LAB
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default FixedTop;