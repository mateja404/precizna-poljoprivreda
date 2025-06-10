import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1eeee;

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
    margin-bottom: 50px;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h2`
  margin-top: 170px;
  color: rgb(0, 0, 0);
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  width: 500px;

  @media screen and (max-width: 768px) {
    font-size: 27px;
    margin-top: 100px;
  }
`;

export const TwoImagesContainer = styled.div`
  display: flex;
  margin: 50px 0;
  height: 550px;
  max-width: 1300px;
  justify-content: space-between;
  align-items: center;
  background-color: #f1eeee;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
    margin-top: 50px;
    margin-right: 0px;
    margin-bottom: 0px;
    height: 100%;
  }
`;

export const ZokiContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 530px;
  width: 300px;
  margin: 0 80px;
  box-shadow: 0 2px 50px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;

    filter: grayscale(0%);
  }

  @media screen and (max-width: 768px) {
    margin: 0 40px;
  }
`;

export const ZokiImage = styled.img`
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%; /* Ensure it takes full width */
  height: auto; /* Maintain aspect ratio */
`;

export const ZokiDescriptionIme = styled.p`
  text-align: center;
  background-color: #f1eeee;
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const ZokiDescription = styled.p`
  text-align: center;
  background-color: #f1eeee;
  color: #000;
  font-size: 16px;
`;

export const KrleDescriptionIme = styled.p`
  text-align: center;
  background-color: #f1eeee;
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const KrleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 530px;
  width: 300px;
  margin: 0 80px;
  box-shadow: 0 2px 50px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  color: #fff;
  line-height: 20px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;

    filter: grayscale(0%);
  }
  @media screen and (max-width: 768px) {
    margin: 0 40px;
  }
`;

export const KrleImage = styled.img`
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%; /* Ensure it takes full width */
  height: auto; /* Maintain aspect ratio */
`;

export const KrleDescription = styled.p`
  text-align: center;
  font-size: 16px;
  color: #000;
  background-color: #f1eeee;
`;

export const SecondTitleandDescriptionContainer = styled.div`
  font-size: 18px;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    padding: 0 20px;
  }
`;

export const SecondTitle = styled.h4`
  font-size: 28px;
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 25px;
    padding: 0 20px;
  }
`;

export const DescriptionTwo = styled.p`
  font-size: 16px;
  text-align: start;
  margin: 30px;
  padding: 0 120px;
  line-height: 35px;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-weight: 500;
    font-size: 17px !important;
    line-height: 23px;
    padding: 0;
    margin: 20px 5px;
  }
`;

export const RestOfTeamContainer = styled.div`
  display: flex;
  margin: 50px 0;
  height: 100%;
  max-width: 1300px;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 0 20px; /* Added padding for better spacing */
  }

  @media screen and (max-width: 768px) {
  margin:  0; /* Adjust margin for smaller screens */
`;

export const RestOfTheTeamTitle = styled.h5`
  font-size: 28px;
  text-align: center;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 80px;
  width: 100%; /* Ensure it takes full width */
  max-width: 500px; /* Optional: Set a max-width to control where it breaks */
  word-break: break-word; /* Ensure long words break to fit the width */
  overflow-wrap: break-word; /* Alternative for handling long words */

  @media screen and (max-width: 768px) {
    font-size: 24px; /* Adjust font size for smaller screens */
    max-width: 100%; /* Ensure it takes full width on smaller screens */
    padding: 0;
    margin-top: 20px; /* Adjust margin for smaller screens */
    margin-bottom: 40px; /* Adjust margin for smaller screens */
  }
`;

export const RestOfTeamContainerImages = styled.div`
  display: flex;
  height: 100%;
  max-width: 1300px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 80px;
  flex-wrap: wrap; /* Ensure items wrap on smaller screens */

  @media screen and (max-width: 768px) {
    justify-content: center; /* Center items on smaller screens */
    width: 100%; /* Ensure it takes full width */
    margin-left: 0; /* Remove margin */
    margin-bottom: 10px; /* Remove margin */
  }
`;

export const CardOfTeamMember = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 445px;
  width: 235px;
  margin: 0 20px;
  box-shadow: 0 2px 50px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  color: #fff;
  line-height: 20px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;

    filter: grayscale(0%);
  }

  @media screen and (max-width: 768px) {
    lex-basis: calc(50% - 40px); /* Adjust width for two items per row */
    margin: 20px 10px;
  }
`;

export const ImageOfTeamMember = styled.img`
  height: 350px;
  width: 100%; /* Ensure it takes full width */
  margin-bottom: 20px;
`;

export const DescriptionOfTeamMember = styled.p`
  text-align: center;
  font-size: 12px;
  color: #000;
  padding: 0 10px;
  margin-bottom: 20px;
`;
