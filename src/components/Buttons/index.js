import styled from "styled-components";
import { Button } from "../ButtonElement";

export const TopButton = styled(Button)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BottomButton = styled(Button)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
`;