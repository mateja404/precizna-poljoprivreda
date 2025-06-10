import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

// import HomePageImage from "./images/HomePage.jpg";

export const HomePageContainer = styled.div`
  background: rgb(130, 130, 130);

  display: flex;
  aling-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 375px) {
    margin-bottom: 650px;
    margin-left: 50px;
    background: none;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: 650px;
    margin-left: 50px;
    background: none;
  }

  @media screen and (max-width: 430px) {
    margin-bottom: 650px;
    margin-left: 50px;
    background: none;
    height: 200px;
  }

  @media screen and (max-width: 1366px) {
    max-width: 1293px;
  }
`;
// export const HomeBackground = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width; 100%;
//   height: 100%;
//   overflow: hidden;

//   @media screen and (max-width: 375px) {
//     display: none;
//   }

//   @media screen and (max-width: 414px) {
//     display: none;
//   }

//   @media screen and (max-width: 430px) {
//     display: none;
//   }
// `;

// export const ImageBackground = styled.img`
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
//   background: url(${HomePageImage}) no-repeat -1250px -100px fixed;
//   background-size: 200% 100%;
//   //

//   @media screen and (max-width: 1600px) {
//     background: url(${HomePageImage}) no-repeat -1000px center fixed;
//     background-size: 200% 100%;
//   }
//   @media screen and (max-width: 375px) {
//     background: none;
//   }

//   @media screen and (max-width: 414px) {
//     background: none;
//   }

//   @media screen and (max-width: 430px) {
//     background: none;
//   }
// `;

// export const HomeContent = styled.div`
//   z-index: 3;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding-top: 80px;

//   @media screen and (max-width: 375px) {
//     flex-direction: column;
//     width: 80%;
//   }

//   @media screen and (max-width: 414px) {
//     flex-direction: column;
//     width: 80%;
//   }

//   @media screen and (max-width: 430px) {
//     flex-direction: column;
//     width: 80%;
//   }

//   @media screen and (max-width: 1024px) {
//     margin-left: 90px;
//   }

//   @media screen and (max-width: 344px) {
//     margin-left: 10px;
//   }

//   @media screen and (max-width: 853px) {
//     margin-left: 10px;
//   }
// `;

// export const KrleIZokiKnjiga = styled.div`
//   background-color: rgba(0, 0, 0, 0.7);
//   width: 300px;
//   height: 600px;
//   margin: 40px;
//   &:hover {
//     transform: scale(1.03);
//     transition: all 0.3s ease-in-out;
//   }

//   @media screen and (max-width: 768px) {
//     margin-left: 17px;
//   }
// `;
// export const MarkoKnjiga = styled.div`
//   background-color: rgba(0, 0, 0, 0.7);
//   width: 300px;
//   height: 600px;
//   margin: 40px;
//   &:hover {
//     transform: scale(1.03);
//     transition: all 0.3s ease-in-out;
//   }

//   @media screen and (max-width: 344px) {
//     margin-left: 20px;
//   }
// `;
// export const PreNaslovKnjige = styled.h5`
//   color: white;
//   padding: 0 25px;
//   font-size: 17px;
//   font-weight: bold;
//   margin: 4px 0;
// `;
// export const TitleOfBook = styled.h5`
//   color: white;
//   padding: 0 25px;
//   font-size: 17px;
//   font-weight: bold;
//   margin: 4px 0;
// `;
// export const PUmderTitle = styled.p`
//   color: white;
//   padding: 0 25px;
//   font-size: 17px;
//   font-weight: bold;
//   margin: 4px 0;
// `;
// export const BigYellowButton = styled.button`
//   background-color: #ffca00;
//   width: 250px;
//   height: 50px;
//   border: 1px black solid;
//   margin: 25px;
//   text-align: center;
//   font-size: 20px;
//   border-radius: 10px;
//   font-weight: bold;
//   &:hover {
//     transform: scale(1.02);
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//   }
// `;
// export const ImageWrapper = styled.div``;
// export const ImageOfBook = styled.img`;
//   width: 100%;
//   height: 100%;
//   padding: 25px;
// `;
// export const ImageOfBook2 = styled.img`
//   width: 100%;
//   height: 100%;
//   padding: 25px;
// `;

// export const SpanBookTitle = styled.span`
//   font-size: 15px;
//   letter-spacing: 0.06rem;
//   line-height: 1.06;
//   text-align: start;
//   font-weight: bold;
//   color: #ffca00;
// `;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
