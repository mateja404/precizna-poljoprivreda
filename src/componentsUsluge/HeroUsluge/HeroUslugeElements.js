import styled from "styled-components";

export const Header = styled.h1`
  margin-top: 170px;
  color: rgb(0, 0, 0);
  font-size: 48px;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 38px;
    margin-top: 90px;
  }
`;

export const TextP = styled.p`
  margin-top: 60px;
  margin-left: 50px;
  margin-right: 50px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  text-align: center;
  line-height: 35px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
    line-height: 24px; /* Adjust line height */
    word-spacing: -0.02em; /* Adjust word spacing */
    margin-top: 20px; /* Adjust top margin */
  }
`;
export const HeroUslugeContent = styled.div`
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1366px) {
    max-width: 1293px;
  }
`;
