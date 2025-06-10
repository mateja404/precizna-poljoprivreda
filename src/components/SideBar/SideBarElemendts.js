import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link } from "react-scroll";
import logoBeli from "../../images/Logo/logoCrni.png";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  padding: 20px;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  outline: none;
  font-weight: 400;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px; /* Add margin to separate from the menu */
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  color: #000;
  margin-top: 20px; /* Add margin to separate from the icon */
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  margin: 0;
`;

export const SidebarLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.875rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #ffca00;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarLinkLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgb(167, 167, 167);
  opacity: 0.4;
  margin: 10px 0; /* Add margin to separate lines */
`;

export const SideBarLinkKonakt = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(#535759, #3b3e40);
  padding: 14px 26px;
  width: 100%;
  border-radius: 4px;

  &:hover {
    color: #ffca00;
    transition: 0.2s ease-in-out;
  }
`;

export const NavLogoSideBar = styled(LinkRouter)`
  cursor: pointer;
  text-decoration: none;
  background: url(${logoBeli}) no-repeat center center;
  background-size: cover;
  width: 145px;
  height: 45px;
`;

export const ContactContainer = styled.div`
  position: fixed;
  bottom: 16px; /* Fixed at 16px from the bottom */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust for exact centering */
  width: calc(100% - 48px); /* Adjust width to account for padding */
  max-width: 300px; /* Optional: Set a max-width for better responsiveness */
  padding: 0 24px; /* Add padding for spacing */
  text-align: center;
`;
