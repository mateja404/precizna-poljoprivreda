import styled from "styled-components";
import { Link } from "react-router-dom";

import logoBeliPlavi from "../../images/Logo/logoBeliPlav.jpg";

export const FooterContainer = styled.footer`
  background-color: rgb(17, 29, 30);

  @media screen and (max-width: 430px) {
    width: 100% !important;
  }
  @media screen and (max-width: 540px) {
    width: 100% !important;
  }

  @media screen and (max-width: 414px) {
    width: 100% !important;
  }

  @media screen and (max-width: 412px) {
    width: 100% !important;
  }

  @media screen and (max-width: 1366px) {
    width: 1293px;
  }
`;

export const FooterWrap = styled.div`
  padding: 48px 35px;
  margin-left: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 50px;
  color: white;

  @media screen and (max-width: 768px) {
    gap: 12px;
    padding: 20px 0;
    margin: 0;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 414px) {
    flex-direction: column;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    gap: 20px;
  }

  @media screen and (max-width: 820px) {
    gap: 20px;
  }

  @media screen and (max-width: 375px) {
    padding-right: 0;
  }
`;

export const FooterLogoAndAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: start;
  max-width: 300px;
  align-items: start;

  @media screen and (max-width: 768px) {
    margin-left: 35px;
  }

  @media screen and (max-width: 820px) {
    margin-left: 35px;
  }

  @media screen and (max-width: 853px) {
    margin-left: 35px;
  }

  @media screen and (max-width: 375px) {
    margin-left: -15px;
  }

  @media screen and (max-width: 540px) {
    margin-left: 0px;
  }
`;

// NOVI FOOTER

export const FooterLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  background: ${({ scrollNavLogo }) =>
    scrollNavLogo
      ? `url(${logoBeliPlavi}) no-repeat center center / contain`
      : `url(${logoBeliPlavi}) no-repeat center center / contain`};
  background-color: rgb(17, 29, 30); /* The improved transparency spell */
  background-size: cover;

  width: 40px;
  height: 30px;
  min-width: 145px;
  min-height: 45px;

  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const FooterText = styled.p`
  font-weight: 500;

  @media screen and (max-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 430px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterAddress = styled.p`
  font-weight: 500;
`;
export const FooterCity = styled.p`
  font-weight: 500;
`;
export const FooterPhone = styled.p`
  margin-top: 25px;
  font-weight: 500;
  white-space: nowrap;
`;
export const FooterRadnoVreme = styled.p`
  font-weight: 500;
  white-space: nowrap;
`;
export const FooterEmail = styled.p`
  font-weight: 500;
`;

export const FooterOnamaKurseviUslugeProdaja = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 414px) {
    display: none;
  }

  @media screen and (max-width: 430px) {
    display: none;
  }

  @media screen and (max-width: 360px) {
    display: none;
  }

  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const FooterPreciznaPoljoprivreda = styled.h4`
  font-size: 20px;
  font-weight: 600;
`;

export const FooterOnama = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
export const FooterUsluge = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
export const FooterKursevi = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
export const FooterProdaja = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const FooterBlog = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const FooterSolicalMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 414px) {
    display: none;
  }

  @media screen and (max-width: 430px) {
    flex-direction: row;
  }

  @media screen and (max-width: 540px) {
    display: none;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    margin-left: -18px;
    gap: 30px;
    margin-top: 20px;
  }

  @media screen and (max-width: 412px) {
    margin-top: 20px;
    width: 100% !important;
    margin-left: -25px;
    gap: 26px;
  }

  @media screen and (max-width: 280px) {
    width: 120%;
    flex-direction: row;
    margin-left: -30px;
    gap: 20px;
  }

  @media screen and (max-width: 375px) {
    gap: 20px;
    margin-left: -28px;
  }

  @media screen and (max-width: 540px) {
    width: 40%;
  }

  @media screen and (max-width: 430px) {
    display: none;
  }
`;
export const LinkForFacebook = styled(Link)`
  color: white;
`;
export const LinkForInstagram = styled(Link)`
  color: white;
`;
export const LinkForLinkedin = styled(Link)`
  color: white;
`;
export const LinkForYouTube = styled(Link)`
  color: white;
`;

export const FooterSolicalMediatNaslov = styled.h4`
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 414px) {
    font-size: 18px;
  }

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }

  @media screen and (max-width: 360px) {
    font-size: 15px;
    margin-left: 15px;
  }
`;

export const FooterPitajteNas = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background: #344955;
  color: black;
  padding: 30px;
  border-radius: 10px;
  border: none;

  @media screen and (max-width: 360px) {
    margin-left: 7px;
    margin-top: 30px;
  }

  @media screen and (max-width: 412px) {
    margin-top: 30px;
    margin-left: 5px;
  }

  @media screen and (max-width: 768px) {
    width: 120% !important;
  }

  @media screen and (max-width: 820px) {
    width: 90%;
  }
`;
export const FooterPitajteNasNaslov = styled.h4`
  font-size: 24px;
  display: flex;
  font-weight: 500;
  justify-content: center;
  color: white;
`;
export const FooterTuSmoDaVamPomognemo = styled.p`
  font-weight: 500;
  display: flex;
  justify-content: center;
  color: white;
`;
export const FooterFormContainer = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  @media screen and (max-width: 360px) {
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    width: 90%;
  }

  @media screen and (max-width: 540px) {
    width: 90%;
  }
`;
export const FooterInputEmail = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
`;
export const FooterInputFirstName = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
`;
export const FooterInputLastName = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
`;
export const FooterInputPitanje = styled.textarea`
  width: 300px;
  font-size: 16px;
  border-radius: 5px;
  height: 120px;
  box-sizing: border-box;

  @media screen and (max-width: 360px) {
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
export const FooterSubmeitButton = styled.button`
  background-color: rgb(17, 29, 30);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;
  border-radius: 10px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

export const FooterCopyright = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  padding: 20px 20px 40px 20px;
`;
