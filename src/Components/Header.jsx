import React from 'react'

// importing react Bootstrap navbar
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// music react icon
import { GiMusicalNotes } from "react-icons/gi";

function Header() {
  return (
    <div>
      <Navbar className="bg-body-black">
        <Container>
          <Navbar.Brand href="#home" className='text-white fs-2'>
          <GiMusicalNotes /> Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header