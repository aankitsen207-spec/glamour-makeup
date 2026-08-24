'use client'

import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar bg="dark" expand="lg" sticky="top" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#" className={styles.brand}>
          ✨ GLAMOUR MAKEUP ✨
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="#products" onClick={() => setExpanded(false)}>
              Products
            </Nav.Link>
            <Nav.Link href="#gallery" onClick={() => setExpanded(false)}>
              Gallery
            </Nav.Link>
            <Nav.Link href="#testimonials" onClick={() => setExpanded(false)}>
              Reviews
            </Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
