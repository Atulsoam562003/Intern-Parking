import React from "react";
import { Navbar, NavLink, Button, Nav } from "react-bootstrap";
import logo from "../logo.png";
import "../header.css"; // Import your custom CSS file

function signoutFunction() {
  console.log("Sign out");
  localStorage.removeItem("loggedinUser");
  window.location.pathname = "/";
}

const Header = () => {
  let loggedinUser = localStorage.getItem("loggedinUser");
  let canInitialize = false;
  let canSeeReports = false;
  let role = "";

  if (loggedinUser) {
    loggedinUser = JSON.parse(loggedinUser);
    canInitialize = loggedinUser.previlage.canInitialize;
    canSeeReports = loggedinUser.previlage.canSeeReports;
    role = loggedinUser.u_type;
  }

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand href="/dashboard">
        <img src={logo} alt="Logo" className="logo" />
        <span className="brand-text">ParkPal Smart Parking</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {loggedinUser !== null && (
            <NavLink href="/dashboard" className="nav-link-custom">
              Dashboard
            </NavLink>
          )}
          {canInitialize && (
            <NavLink href="/initialize" className="nav-link-custom">
              Initialize
            </NavLink>
          )}
          {canSeeReports && (
            <NavLink href="/report" className="nav-link-custom">
              Reports
            </NavLink>
          )}
        </Nav>
        <span className="role-text">
          {role === "agent"
            ? "Booking Counter Agent"
            : "Parking Zone Assistant"}
        </span>
        <Button
          variant="outline-success"
          className="signout-button"
          onClick={signoutFunction}
        >
          Sign Out
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
