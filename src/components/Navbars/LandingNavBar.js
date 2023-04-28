/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledCollapse,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class LandingNavBar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-8" to="/" tag={Link}>
                <img
                  alt="65"
                  src={require("assets/img/brand/logo1.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                    <NavLink
                      href="/"
                      id="tooltip3335890748"
                      className="navbar-link"
                    >

                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">INICIO</span>
                    </NavLink>
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        <i className="ni ni-collection d-lg-none mr-1" />
                        <span className="nav-link-inner--text navbar-link">NOSOTROS</span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem to="/nosotros#mision" tag={Link}>
                          Misión
                        </DropdownItem>
                        <DropdownItem to="/nosotros#vision" tag={Link}>
                          Vision
                        </DropdownItem>
                        <DropdownItem to="/nosotros#valores" tag={Link}>
                          Valores
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavLink
                      href="/nuestro-espacio"
                      id="tooltip33358907482"
                      className="navbar-link"
                      >

                        <i className="ni ni-ui-04 d-lg-none mr-1" />
                        <span className="nav-link-inner--text">NUESTRO ESPACIO</span>
                    </NavLink>
                    <NavLink
                      href="#companias"
                      id="tooltip33358907482"
                      className="navbar-link"
                      >

                        <i className="ni ni-ui-04 d-lg-none mr-1" />
                        <span className="nav-link-inner--text">GALERIA DE FOTOS</span>
                    </NavLink>
                    <NavLink
                      href="#contacto"
                      id="tooltip333589074823"
                      className="navbar-link"
                    >
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">CONTACTO</span>
                    </NavLink>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon navbar-link"
                      href="https://www.facebook.com/centrodedia.ensuenio"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Me gusta en Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon navbar-link"
                      href="https://www.instagram.com/centrodediaensueno"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Seguinos en Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default LandingNavBar;
