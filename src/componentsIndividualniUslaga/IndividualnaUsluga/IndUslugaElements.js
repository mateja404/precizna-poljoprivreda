import styled from "styled-components";

export const IndividualniKursContainer = styled.div`
  height: auto;
  text-align: left;
  padding: 100px;

  @media screen and (max-width: 1366px) {
    padding: 0;
    max-width: 1293px;
  }
`;

export const ImgAtTop = styled.img`
  width: 135px;
  height: 135px;
`;

export const FormLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 26px;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 414px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 55px;
  }
`;
export const LeftContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 2px 2px 15px rgb(26, 26, 26);
  border-left: 5px solid #ffca00;
  width: 797px;
  justify-items: center;

  @media (max-width: 375px) {
    width: 99.5%; /* Take full width of the parent */
    padding: 15px; /* Adjust padding to suit smaller screen */
    border-radius: 10px; /* Adjust border radius for smaller screen */
    box-shadow: 1px 1px 10px rgb(26, 26, 26); /* Adjust shadow if needed */
  }

  @media screen and (max-width: 414px) {
    width: 99.5%;
  }

  @media screen and (max-width: 430px) {
    width: 99.5% !important;
  }

  @media screen and (max-width: 412px) {
    width: 99.5%;
  }

  @media screen and (max-width: 540px) {
    width: 99.5%;
  }
`;

export const TitileMain = styled.h2`
  margin-top: 55px;
  font-size: 40px;
  text-align: center;
  padding-bottom: 100px;

  @media screen and (max-width: 375px) {
    font-size: 25px;
    margin-top: 100px;
  }

  @media screen and (max-width: 414px) {
    font-size: 25px;
    margin-top: 110px;
  }



  @media screen and (max-width: 430px) {
    font-size: 25px;

    margin-top: 110px;
  }

  @media screen and (max-width: 540px) {
    font-size: 25px;

    margin-top: 110px;
`;

export const DurationShort = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const DurationTitle = styled.h5`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 30px;

  @media screen and (max-width: 375px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 414px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 390px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 430px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 360px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 412px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 344px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 412px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }
`;
export const Description1 = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 30px;
  @media screen and (max-width: 375px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 414px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 390px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 430px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 360px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 412px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 344px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 412px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }
`;

export const Description2 = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 30px;
  @media screen and (max-width: 375px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 414px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 390px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 430px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 360px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 412px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 344px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 412px) {
    word-spacing: 3px;
    line-height: 17px;
    letter-spacing: 0px;
  }
`;

export const DurationLong = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 30px;
`;

export const Price = styled.span`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    word-spacing: 2px;
    line-height: 17px;
    letter-spacing: -1px;
    font-size: 16px;
  }

  @media screen and (max-width: 414px) {
    word-spacing: 2px;
    line-height: 17px;
    letter-spacing: -1px;
    font-size: 16px;
    font-weight: 500;
  }

  @media screen and (max-width: 390px) {
    word-spacing: 2px;
    line-height: 17px;
    letter-spacing: -1px;
  }

  @media screen and (max-width: 430px) {
    word-spacing: 2px;
    line-height: 17px;
    letter-spacing: -1px;
  }

  @media screen and (max-width: 360px) {
    word-spacing: 2px;
    line-height: 17px;
    letter-spacing: -1px;
  }

  @media screen and (max-width: 412px) {
    word-spacing: 2px;
    line-height: 17px;
    letter-spacing: -1px;
  }

  @media screen and (max-width: 344px) {
    word-spacing: 2px;
    line-height: 17px;
    letter-spacing: -1px;
  }
`;

export const FormContainer = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 15px;
  border-left: 5px solid #ffca00;
  box-shadow: 2px 2px 15px rgb(26, 26, 26);
  margin-left 20px;
  width: 100%;

   @media screen and (max-width: 375px) {
       width: 99.5%;
    justify-content: center
  }
      @media screen and (max-width: 414px) {
    width: 99.5%;
  }

   @media screen and (max-width: 430px) {
    width: 99.5% !important;
  }
`;

export const TitleForm = styled.h3`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const DuratioFormDate = styled.p`
  font-weight: bold;
  text-align: center;
`;

export const PForm = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
`;

export const InputNapomena = styled.textarea`
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  height: 100%;
  box-sizing: border-box;

  ::placeholder {
    color: #999;
    font-size: 14px;
  }
`;

export const DropDownContainer = styled.div`
  position: relative;
  padding-top: 100px;
  width: 100%;
`;

//// NOVI KOJI RADE

export const DropdownContainer = styled.div`
  width: 100%;
  margin-bottom: 30px; /* Adjust as needed for spacing between dropdowns */
  position: relative;
  border-radius: 7px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.7);
  padding: 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 24px;
  margin-bottom: 10px;
  margin-left: 10px;
  font-weight: bold;
`;

export const Arrow = styled.div`
  border: solid black;
  border-width: 0 4px 4px 0;
  display: inline-block;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  padding: 3px;
  transform: ${(props) => (props.isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: all 0.7s ease-in-out;
`;

export const DropdownContent = styled.div`
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: opacity 0.7s ease-in-out, max-height 0.7s ease-in-out;
  margin-left: 10px;
  font-size: 20px;
`;
