import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LogoBeliPlavi from "../../images/Logo/logoBeliPlav.jpg";
import LogoCrni from "../../images/Logo/logoCrni.png";
// import logoFaxZeleni from "../../images/Logo/logoFaxZeleni.png";
import { Link as ScrollLink } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "rgb(17, 29, 30);" : "#fff")};
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-top: -80px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all case;
  }

  @media screen and (max-width: 430px) {
    width: 100% !important;
  }

  @media screen and (max-width: 360px) {
  }

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
  }

  @media screen and (max-width: 540px) {
    width: 100%;
  }

  @media screen and (max-width: 412px) {
    width: 100% !important;
  }

  @media screen and (max-width: 414px) {
    width: 100% !important;
  }

  @media screen and (max-width: 1366px) {
    max-width: 1293px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0;
  max-width: 1500px;

  @media screen and (max-width: 1366px) {
    justify-content: space-around;
  }
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  margin-top: 33px;
  background: url(${LogoCrni}) no-repeat center center / contain;
  background-size: cover;
  width: 100px;
  height: 28px;
  // margin-left: -140px;
  left: 70px;
  position: absolute;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1247px) {
    display: inline-block;

    position: absolute;
    top: 0;
    left: 48px;
    transform: translate(-100%, 60%);
    font-size: 28.8px;
    cursor: pointer;
    color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 0;
  @media screen and (max-width: 1247px) {
    display: none;
  }
  @media screen and (max-width: 1366px) {
  }
`;

export const NavItem = styled.li`
  height: 80px;
  margin: 0 30px;
  margin-top: 8px;

  @media screen and (max-width: 1366px) {
    margin: 0;
  }
`;
export const NavLinks = styled(NavLink)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 16px;
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 500;

  &.active {
    color: #ffca00;
  }

  &:hover {
    color: #ffca00;
  }
`;

export const NavLinksKontakt = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 16px;
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 500;
  color: #000;

  &.active {
    color: #ffca00;
  }

  &:hover {
    color: #ffca00;
  }
`;

//Nek ostane za sada mozda se bude dodalo

// export const NavLogoFax = styled(LinkRouter)`
//   display: flex;
//   cursor: pointer;
//   align-items: center;
//   text-decoration: none;
//   background: url(${logoFaxZeleni}) no-repeat center center;
//   background-size: cover;

//   margin: 10px 30px;

//   width: 50px;
//   height: 20px;
//   min-width: 90px;
//   min-height: 75px;
//   transition: all 0.2 ease-in-out;

//   @media screen and (max-width: 1247px) {
//     display: none;
// //   }
// `;
