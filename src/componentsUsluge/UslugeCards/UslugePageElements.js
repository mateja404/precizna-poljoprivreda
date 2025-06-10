import styled from "styled-components";
import { Link } from "react-router-dom";

export const UslugeCardsContainer = styled.div`
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
    padding: 0 10px;
    grid-gap: 0;
    margin: 0;
  }
`;

export const UslugeCardsWrapper = styled.div`
  margin: 40px 0;
  display: grid;
  align-items: center;
  padding: 0 140px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 50px;

  @media screen and (max-width: 1366px) {
    padding: 0;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    gap: 50px;
    width: 100%;
    margin: 25px 0;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const UslugeCardsCard = styled(Link)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  height: 620px;
  width: 383px;
  border-left: 5px solid rgb(121, 27, 39);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  color: #fff;
  margin: 0 auto;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1366px) {
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    height: 620px;
    margin: 0 !important;
  }

  @media screen and (max-width: 820px) {
    margin-left: 30px;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 45px;
  }
`;

export const UslugeCardsIconWrapper = styled.div``;

export const UslugeCardsH2PWrapper = styled.div`
  margin-top: 15px;
  padding: 5px;
`;

export const UslugeCardsIcon = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const UslugeCardsH2 = styled.h2`
  font-size: 22px;
  margin-bottom: 5px;
  color: black;
  padding: 0 10px;

  @media screen and (max-width: 1366px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 820px) {
    font-size: 20px;
  }
`;

export const UslugeCardsP = styled.p`
  font-size: 15px;
  text-align: start;
  color: black;
  padding: 0 10px;
  line-height: 25px;
`;
