import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

// Styled-component for LinkRouter with button styles
export const Button = styled(LinkRouter)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#FFCA00" : "rgb(17, 29, 30);")};
  white-space: nowrap;
  padding: 10px 12px;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center; // Fixed typo from "aling-items" to "align-items"
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    white-space: nowrap;
    color: #000;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 10px;
  }
`;
