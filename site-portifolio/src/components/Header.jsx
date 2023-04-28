import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { pages, socialMedias } from "../utils/constants";

import "../styles/Header.css";

const Header = ({ isNavbarCollapsed, handleNavbarCollapse }) => {
  const handleToggleCollapse = () => {
    handleNavbarCollapse(!isNavbarCollapsed);
  };

  return (
    <Navbar
      id="nav"
      className={`nav-bar ${isNavbarCollapsed ? "collapsed" : ""}`}
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <div className="profile-image-container">
            <Link to={{ pathname: "/" }}>
              <img
                className="profile-image"
                src="https://avatars.githubusercontent.com/u/38771418?v=4"
                alt=""
                title="Mateus Walz"
              />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggleCollapse}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {pages.map((item) => (
              <Nav.Link href={item.link}>{item.title}</Nav.Link>
            ))}
          </Nav>
          <Nav className="align-social-media">
            {socialMedias.map((item) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                className="social-media-link"
              >
                {item.icon}
              </a>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
