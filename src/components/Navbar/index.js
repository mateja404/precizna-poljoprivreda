import { animateScroll as scroll } from "react-scroll";
import React from "react";
import "./NavBar.css";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  // NavLogoFax,
  NavLinksKontakt,
} from "./NavbarElements";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <div className="LogoContainer">
            <MobileIcon onClick={toggle}>
              <div className="BurgerMenu">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MobileIcon>
            <NavLogo to="/" onClick={toggleHome}></NavLogo>
          </div>

          <NavMenu>
            <NavItem>
              <NavLinks to="/" onClick={toggleHome}>
                Naslovna
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/prodaja" onClick={toggleHome}>
                Prodaja
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/kursevi" onClick={toggleHome}>
                Kursevi
              </NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="/usluge" onClick={toggleHome}>
                Usluge
              </NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="/blog" onClick={toggleHome}>
                Blog
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/onama" onClick={toggleHome}>
                O nama
              </NavLinks>
            </NavItem>
            <NavItem>
              {/* <NavLinks to="/mapa" onClick={toggleHome}>
                Mapa
              </NavLinks> */}
            </NavItem>
            <NavItem>
              <NavLinksKontakt
                to="footer"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Kontakt
              </NavLinksKontakt>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
