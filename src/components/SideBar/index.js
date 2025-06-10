import React from "react";
import { FaX } from "react-icons/fa6";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  NavLogoSideBar,
  SideBarLinkKonakt,
  SidebarLinkLine,
  ContactContainer,
} from "./SideBarElemendts";
import styled from "styled-components";

const CloseIconStyled = styled(FaX)`
  color: #000;
  font-size: 24px;
  cursor: pointer;
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIconStyled />
        <NavLogoSideBar to="/" />
      </Icon>
      <SidebarLinkLine />

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">Naslovna</SidebarLink>
          <SidebarLinkLine />
          <SidebarLink to="/prodaja">Prodaja</SidebarLink>
          <SidebarLinkLine />
          <SidebarLink to="/kursevi">Kursevi</SidebarLink>
          <SidebarLinkLine />
          <SidebarLink to="/usluge"> Usluge</SidebarLink>
          <SidebarLinkLine />
          <SidebarLink to="/blog">Blog</SidebarLink>
          <SidebarLinkLine />
          <SidebarLink to="/onama">O Nama</SidebarLink>
          <SidebarLinkLine />
        </SidebarMenu>
      </SidebarWrapper>
      <ContactContainer>
        <SideBarLinkKonakt
          to="footer"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          onClick={toggle}
        >
          Kontakt
        </SideBarLinkKonakt>
      </ContactContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
