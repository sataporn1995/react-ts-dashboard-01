import React from "react";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

import { toggleFullScreen } from "./full-screen";

const NavbarMenu: React.FC = () => {
  const navigate = useNavigate();

  async function handleLogout(): Promise<void> {
    const { isConfirmed } = await Swal.fire({
      title: 'Are you sure?',
      html: 'Do you want to <b class="text-danger">LOGOUT</b> ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });
    if(isConfirmed) {
      await Swal.fire({
        icon: 'success',
        title: 'SUCCESS',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/");
    }
  }

  return (
    <Navbar variant="dark" className="bg-navbar py-0" expand="lg">
      <Container fluid="xl">
        <Navbar.Brand href="#home" className="nav-logo" as={Link} to="/overview">
          <b className="text-danger">SMART</b> I
          <span className="small">ndustry</span> 4.0
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="text-uppercase">
            <Nav.Link href="#Overview" as={Link} to="/overview">
              O<span className="small">verview</span>
            </Nav.Link>
            <Nav.Link href="#Dashboard" as={Link} to="/dashboard">
              D<span className="small">ashboard</span>
            </Nav.Link>
            <Nav.Link href="#AGV" as={Link} to="/agv">
              A<span className="small">GV</span>
            </Nav.Link>
            <Nav.Link href="#Alarm" as={Link} to="/alarm">
              A<span className="small">larm</span>
            </Nav.Link>
            <Nav.Link href="#Report" as={Link} to="/report">
              R<span className="small">eport</span>
            </Nav.Link>
            <Nav.Link onClick={toggleFullScreen}>
              <i className="fa-solid fa-expand" />
            </Nav.Link>
            <Nav.Link onClick={handleLogout} className="text-danger">
              <i className="fa-solid fa-arrow-right-from-bracket" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
