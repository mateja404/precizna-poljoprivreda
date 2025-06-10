import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { IconContext } from "react-icons";
import {
  data,
  dataSecond,
  sliderSettings,
  sliderSettingsTwo,
} from "./ProdajaData";

import { ArrowForward, ArrowRight } from "../HomePage/HomePageElements";
import {
  KursContainer,
  KursH1,
  KursWrapper,
  KursPh1,
  WrapperH1P,
  KursCard,
  SliderWrapper,
  KursH2,
  KursIcon,
  KursP,
  KursIconWrapper,
  KursH2PWrapper,
  ButtonContainer,
  ReviewSliderKursevi,
  KursCardTwo,
  KursH2PWrapperTwo,
  KursH2Two,
  KursIconTwo,
  KursIconWrapperTwo,
  KursWrapperTwo,
  SliderTwoContainer,
  ReviewSliderTwo,
  SliderContainer,
  KursPprice,
  Dots,
} from "./ProdajaElements";

import { Button } from "../ButtonElement";
import styled from "styled-components";
import { TopButton, BottomButton } from "../Buttons";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Prodaja = () => {
  const [hover, setHover] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);
  const [sliderRefTwo, setSliderRefTwo] = useState(null);

  function handleArrowClick(direction) {
    if (direction === "left") {
      sliderRef.slickPrev();
      sliderRefTwo.slickPrev();
    } else if (direction === "right") {
      sliderRef.slickNext();
      sliderRefTwo.slickNext();
    }
  }

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <KursContainer>
      <WrapperH1P>
        <KursH1>Prodaja Dronova</KursH1>
        <KursPh1>
          Nudimo Vam širok spektar proizvoda koji će unaprediti svaki aspekt
          Vaše poljoprivredne proizvodnje. Naša prodajna stranica je mesto za
          pronalaženje vrhunskih dronova i opreme koji će vam pomoći da
          postignete vrhunske rezultate u Vašoj poljoprivrednoj proivodnji.
          Posetite nas i pronađite rešenja koja će transformisati način na koji
          radite!
        </KursPh1>
        <TopButton
          to="/prodaja"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          onClick={toggleHome}
        >
          Pregled svih Artikala {hover ? <ArrowForward /> : <ArrowRight />}
        </TopButton>
      </WrapperH1P>
      <SliderWrapper>
        <SliderContainer>
          <ReviewSliderKursevi {...sliderSettings} ref={setSliderRefTwo}>
            {data.map((el, index) => (
              <KursWrapper>
                <KursCard
                  id="artikal-card"
                  to={`/prodaja/${el.id}`}
                  // artikal/${el.id}
                  key={el.id}
                  state={el}
                >
                  <KursIconWrapper>
                    <KursIcon src={el.src} alt={el.alt} />
                  </KursIconWrapper>
                  <KursH2PWrapper>
                    <KursH2>{el.title}</KursH2>
                    <KursP> {el.description}</KursP>
                    <KursPprice>
                      <div className="burger-icon">
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                      </div>
                      {el.price}
                    </KursPprice>
                  </KursH2PWrapper>
                </KursCard>
                <Dots />
              </KursWrapper>
            ))}
          </ReviewSliderKursevi>

          <SliderTwoContainer>
            <ReviewSliderTwo {...sliderSettingsTwo} ref={setSliderRef}>
              {dataSecond.map((el, index) => (
                <KursWrapperTwo>
                  <KursCardTwo
                    id="artikal-card"
                    to={`/prodaja/${el.id}`}
                    // artikal/${el.id}
                    key={el.id}
                    state={el}
                  >
                    <KursIconWrapperTwo>
                      <KursIconTwo src={el.src} alt={el.alt} />
                    </KursIconWrapperTwo>
                    <KursH2PWrapperTwo>
                      <KursH2Two>{el.title}</KursH2Two>
                    </KursH2PWrapperTwo>
                  </KursCardTwo>
                </KursWrapperTwo>
              ))}
            </ReviewSliderTwo>
            <ButtonContainer className="strelica-kursevi">
              <IconContext.Provider value={{ size: "5rem", color: "#000" }}>
                <MdKeyboardArrowLeft onClick={() => handleArrowClick("left")} />
                <MdKeyboardArrowRight
                  onClick={() => handleArrowClick("right")}
                />
              </IconContext.Provider>
            </ButtonContainer>
          </SliderTwoContainer>
        </SliderContainer>
      </SliderWrapper>
      <BottomButton to="/prodaja" onClick={toggleHome}>
        Pregled svih Artikala
      </BottomButton>
    </KursContainer>
  );
};

export default Prodaja;
