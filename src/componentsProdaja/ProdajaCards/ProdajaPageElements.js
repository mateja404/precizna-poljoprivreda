import { Link } from "react-router-dom";
import styled from "styled-components";

export const KursContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  grid-gap: 16px;
  padding: 10px 50px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // Ensure items are centered

  @media screen and (max-width: 1366px) {
    max-width: 1293px;
  }

  @media screen and (max-width: 768px) {
    justify-content: center; // Ensure items are centered on smaller screens
    padding: 0 20px;
    grid-gap: 0;
    margin: 0;
  }
`;

export const KursWrapper = styled.div`
  margin: 40px 0;
  display: grid;
  align-items: center;
  padding: 0 140px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 50px;

  @media screen and (max-width: 1366px) {
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    gap: 50px;
    width: 100%;
    margin: 25px 0;
  }

  @media screen and (max-width: 820px) {
    gap: 50px;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1024px) {
    gap: 50px;
    grid-template-columns: 1fr;
  }
`;

export const KursCard = styled(Link)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  height: 620px;
  width: 383px;
  border-left: 5px solid rgb(17, 29, 30);
  margin: 0 auto; // Ensure the card is centered
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1366px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 620px;
    margin: 0 auto; // Ensure the card is centered on smaller screens
  }

  @media screen and (max-width: 820px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 912px) {
  }
`;

export const KursIconWrapper = styled.div`
  margin-top: 30px;
`;

export const KursH2PWrapper = styled.div`
  margin-top: 15px;
  padding: 5px;
`;

export const KursIcon = styled.img`
  height: 177.3px;
  width: 100%;
  border-radius: 10px;
`;

export const KursH2 = styled.h2`
  font-size: 22px;
  color: black;
  padding: 0 10px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 1366px) {
    font-size: 18px;
  }
`;

export const KursP = styled.p`
  font-size: 15px;
  text-align: start;
  color: black;
  padding: 0 10px;
  line-height: 25px;

  @media screen and (max-width: 820px) {
    font-size: 15px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const KursPprice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 21px;
  font-weight: 700;
  color: black;
  cursor: pointer;
  padding: 10px;

  .burger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    padding-left: 10px;
  }

  .burger-line {
    width: 90%;
    height: 4px;
    background-color: black;
  }
`;

export const SidebarContainer = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f7f7f7;
  border-right: 1px solid #ddd;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarItem = styled.li`
  margin: 10px;

  a {
    text-decoration: none;
    color: #007bff;

    &:hover {
      text-decoration: underline;
    }
  }
`;
