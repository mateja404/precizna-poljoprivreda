import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./IndProdajaElements.css";
import {
  IndividualniKursContainer,
  FormLeftContainer,
  UpperContainer,
  UpperRightContainer,
  NameOfProduct,
  Price,
  PDViDostava,
  DownContainer,
  ImageGalleryContainer,
  ThumbnailColumn,
  Thumbnail,
  MainImage,
  MainImageContainer,
  ZoomedImage,
  OpisTitleRow,
  OpisTitle,
  OpisContainer,
  PrviOpisContainer,
  ImeArtikla,
  PrviOpisArtikla,
  PrveVrednostiArtiklaContainer,
  MaxVremeLeta,
  ZastitaKlase,
  Transmisition,
  DaljinskiUpravljac,
  SenzoriArtikla,
  NocnaKamera,
  Tereni,
  DrugiOpisArtikla,
  DrugeVrednostiArtiklaContainer,
  KlasaZastite,
  MaxNosivost,
  OtpNaVetar,
  RadnaTemp,
  MaxVisina,
  PetiOpisDescription,
  SestiOpisDescription,
  CetvrtiNaslov,
  CetvrtiOpisDescription,
  PetiNaslov,
  SestiNaslov,
  TreciNaslov,
  TreciOpisDescription,
  DrugiNaslov,
  DrugiOpisDescription,
  BaterijaArtikla,
  OstaliOpisContainer,
  Detalji1,
  Detalji2,
} from "./IndProdajaElements";

const IndividualniProdaja = (props) => {
  console.log("Images passed to IndividualniProdaja:", props.images); // Log the images array

  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const [openSection, setOpenSection] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setZoomPosition({ x, y });
    }
  };

  const toggleSection = (section) => {
    setOpenSection(section);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrows
  };
  return (
    <IndividualniKursContainer>
      <FormLeftContainer>
        <UpperContainer>
          <ImageGalleryContainer>
            <ThumbnailColumn>
              {props.images.map((image, index) => (
                <Thumbnail
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  selected={selectedImage === image}
                />
              ))}
            </ThumbnailColumn>
            <MainImageContainer
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              ref={imageRef}
            >
              <MainImage src={selectedImage} alt="Selected product" />
              <ZoomedImage
                src={selectedImage}
                isZoomed={isZoomed}
                zoom={2}
                style={{
                  backgroundPosition: `${zoomPosition.x * 100}% ${
                    zoomPosition.y * 100
                  }%`,
                }}
              />
            </MainImageContainer>
          </ImageGalleryContainer>
          <div className="mobile-slider">
            <Slider {...sliderSettings}>
              {props.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="slider-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <UpperRightContainer>
            <NameOfProduct>{props.name}</NameOfProduct>
            <Price>Cena: {props.price}</Price>
            <NameOfProduct>{props.paketTitle}</NameOfProduct>
            <PDViDostava>{props.paket}</PDViDostava>
            <NameOfProduct>{props.dodatakTitle}</NameOfProduct>
            <PDViDostava>{props.dodatak}</PDViDostava>
            <NameOfProduct>{props.dodatakTitleNapoena}</NameOfProduct>
            <NameOfProduct>{props.dodatakTitle2}</NameOfProduct>
            <PDViDostava>{props.dodatak2}</PDViDostava>
          </UpperRightContainer>
        </UpperContainer>
      </FormLeftContainer>
    </IndividualniKursContainer>
  );
};

export default IndividualniProdaja;

{
  /* <DownContainer>
          <OpisTitleRow>
            <OpisTitle
              onClick={() => toggleSection("description")}
              active={openSection === "description"}
            >
              Opis Proizvoda
            </OpisTitle>
            <OpisTitle
              onClick={() => toggleSection("details")}
              active={openSection === "details"}
            >
              Detalji
            </OpisTitle>
            <OpisTitle
              onClick={() => toggleSection("compatible")}
              active={openSection === "compatible"}
            >
              Kompatibilno
            </OpisTitle>
          </OpisTitleRow>

          <OpisContainer isVisible={openSection === "description"}>
            <PrviOpisContainer>
              <ImeArtikla>{props.name}</ImeArtikla>

              <>
                <PrviOpisArtikla>{props.description1}</PrviOpisArtikla>
                <PrveVrednostiArtiklaContainer>
                  <MaxVremeLeta>{props.stat1}</MaxVremeLeta>
                  <ZastitaKlase>{props.stat2}</ZastitaKlase>
                  <Transmisition>{props.stat3}</Transmisition>
                  <DaljinskiUpravljac>{props.stat4}</DaljinskiUpravljac>
                  <BaterijaArtikla>{props.stat5}</BaterijaArtikla>
                  <SenzoriArtikla>{props.stat6}</SenzoriArtikla>
                  <NocnaKamera>{props.stat7}</NocnaKamera>
                  <Tereni>{props.stat8}</Tereni>
                </PrveVrednostiArtiklaContainer>
                <DrugiOpisArtikla>{props.description2}</DrugiOpisArtikla>
                <DrugeVrednostiArtiklaContainer>
                  <MaxVremeLeta>{props.stat9}</MaxVremeLeta>
                  <KlasaZastite>{props.stat10}</KlasaZastite>
                  <MaxNosivost>{props.stat11}</MaxNosivost>
                  <OtpNaVetar>{props.stat12}</OtpNaVetar>
                  <RadnaTemp>{props.stat13}</RadnaTemp>
                  <MaxVisina>{props.stat14}</MaxVisina>
                </DrugeVrednostiArtiklaContainer>
              </>
            </PrviOpisContainer>
            <OstaliOpisContainer>
              <DrugiNaslov>{props.title2}</DrugiNaslov>

              <>
                <DrugiOpisDescription>
                  {props.description3}
                </DrugiOpisDescription>
                <TreciNaslov>{props.title3}</TreciNaslov>
                <TreciOpisDescription>
                  {props.description4}
                </TreciOpisDescription>
                <CetvrtiNaslov>{props.title4}</CetvrtiNaslov>
                <CetvrtiOpisDescription>
                  {props.description5}
                </CetvrtiOpisDescription>
                <PetiNaslov>{props.title5}</PetiNaslov>
                <PetiOpisDescription>{props.description6}</PetiOpisDescription>
                <SestiNaslov>{props.title6}</SestiNaslov>
                <SestiOpisDescription>
                  {props.description7}
                </SestiOpisDescription>
              </>
            </OstaliOpisContainer>
          </OpisContainer>

          <OpisContainer isVisible={openSection === "details"}>
            <ImeArtikla>{props.name}</ImeArtikla>
            <Detalji1>{props.det1t}</Detalji1>
            <Detalji1>{props.det2t}</Detalji1>
            <Detalji1>{props.det3t}</Detalji1>
            <Detalji1>{props.det4t}</Detalji1>
            <Detalji1>{props.det5t}</Detalji1>
            <Detalji1>{props.det6t}</Detalji1>
            <Detalji1>{props.det7t}</Detalji1>
            <Detalji2>{props.det1p}</Detalji2>
          </OpisContainer>

          <OpisContainer isVisible={openSection === "compatible"}>
            <ul>
              <li>Max flight time: {props.maxFlightTime}</li>
              <li>Protection class: {props.protectionClass}</li>
              <li>Transmission: {props.transmission}</li>
              <li>Remote controller: {props.remoteController}</li>
            </ul>
          </OpisContainer>
        </DownContainer> */
}
