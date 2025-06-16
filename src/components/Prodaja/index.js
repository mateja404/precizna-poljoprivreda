import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IconContext } from "react-icons";
import { ArrowForward, ArrowRight } from "../HomePage/HomePageElements";
import { Button } from "../ButtonElement"; // Ova linija izgleda da nije iskorišćena, proveri da li ti treba
import { data, dataSecond } from "./ProdajaData";
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
  ReviewSliderKursevi, // Pretpostavljamo da je ovo styled(Slider) komponenta
  KursCardTwo,
  KursH2PWrapperTwo,
  KursH2Two,
  KursIconTwo,
  KursIconWrapperTwo,
  KursWrapperTwo,
  SliderTwoContainer,
  ReviewSliderTwo, // Pretpostavljamo da je ovo styled(Slider) komponenta
  SliderContainer,
  KursPprice, // Ova linija izgleda da nije iskorišćena, proveri da li ti treba
  Dots, // Ova linija izgleda da nije iskorišćena na način na koji si je definisao
} from "./ProdajaElements";

import { TopButton, BottomButton } from "../Buttons";
import styled from "styled-components"; // Ova linija izgleda da nije iskorišćena ovde direktno, ali je potrebna za styled komponente

const toggleHome = () => {
  scroll.scrollToTop();
};

const Prodaja = () => {
  const [hover, setHover] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);
  const [sliderRefTwo, setSliderRefTwo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0); // Ova varijabla ti trenutno nije iskorišćena u renderovanju, ali je ok da stoji
  // const maxWords = 50; // Ova varijabla je definisana globalno u funkciji, ali se ne koristi. Definisaće se unutar truncateDescription.

  function handleArrowClick(direction) {
    // Provera da li su sliderRef i sliderRefTwo instancirani pre poziva slick metoda
    if (sliderRef && sliderRefTwo) {
      if (direction === "left") {
        sliderRef.slickPrev();
        sliderRefTwo.slickPrev();
      } else if (direction === "right") {
        sliderRef.slickNext();
        sliderRefTwo.slickNext();
      }
    }
  }

  const onHover = () => {
    setHover(!hover);
  };

  const truncateDescription = (description) => {
    const maxWords = 50; // Lokalna definicija maxWords
    const words = description.split(" ");
    if (words.length > maxWords) {
      return `${words.slice(0, maxWords).join(" ")}...`;
    }
    return description;
  };

  const sliderSettings = {
    dots: false, // Tačkice su isključene po defaultu
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: (index) => {
      setCurrentSlide(index); // Ažuriraj trenutni slajd
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true, // Prikazivanje tačkica na manjim uređajima
          arrows: false,
        },
      },
    ],
    // OVDE JE KLJUČNA IZMENA
    appendDots: (dots) => (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </div>
    ),
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
          {/* Prvi slider sa tačkicama */}
          <ReviewSliderKursevi {...sliderSettings} ref={setSliderRefTwo}>
            {data.map((el) => (
              <KursWrapper key={el.id}> {/* Dodao sam key prop ovde */}
                <KursCard id="artikal-card" to={`/prodaja/${el.id}`} state={el}>
                  <KursIconWrapper>
                    <KursIcon src={el.src} alt={el.alt} />
                  </KursIconWrapper>
                  <KursH2PWrapper>
                    <KursH2>{el.title}</KursH2>
                    <KursP>{truncateDescription(el.description)}</KursP>
                  </KursH2PWrapper>
                </KursCard>
              </KursWrapper>
            ))}
          </ReviewSliderKursevi>

          <SliderTwoContainer>
            <ReviewSliderTwo {...sliderSettings} ref={setSliderRef}>
              {dataSecond.map((el) => (
                <KursWrapperTwo key={el.id}>
                  <KursCardTwo to={`/prodaja/${el.id}`} state={el}>
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
                <MdKeyboardArrowRight onClick={() => handleArrowClick("right")} />
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