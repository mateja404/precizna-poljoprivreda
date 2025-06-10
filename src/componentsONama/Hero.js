import React from "react";
import { data, dataCard } from "./HeroData";
import "./Hero.css";
import {
  HeroContainer,
  Title,
  TwoImagesContainer,
  ZokiContainer,
  ZokiImage,
  ZokiDescription,
  ZokiDescriptionIme,
  KrleContainer,
  KrleImage,
  KrleDescription,
  KrleDescriptionIme,
  SecondTitleandDescriptionContainer,
  SecondTitle,
  DescriptionTwo,
  RestOfTeamContainer,
  RestOfTheTeamTitle,
  RestOfTeamContainerImages,
  CardOfTeamMember,
  ImageOfTeamMember,
  DescriptionOfTeamMember,
} from "./HeroElements";

const Hero = () => {
  const displayItemsInSetsOfFour = [];
  for (let i = 0; i < dataCard.length; i += 4) {
    const chunk = dataCard.slice(i, i + 4);
    displayItemsInSetsOfFour.push(chunk);
  }
  return (
    <>
      <HeroContainer>
        <Title>{data[0].title}</Title>
        <TwoImagesContainer>
          <ZokiContainer>
            <ZokiImage src={data[1].src} alt={data[1].alt} />
            <ZokiDescriptionIme>{data[1].predavac}</ZokiDescriptionIme>
            <ZokiDescription>{data[1].univerzited}</ZokiDescription>
            <ZokiDescription>{data[1].fakultet}</ZokiDescription>
          </ZokiContainer>
          <KrleContainer>
            <KrleImage src={data[2].src} alt={data[2].alt} />

            <KrleDescriptionIme>{data[2].predavac}</KrleDescriptionIme>
            <KrleDescription>{data[2].univerzited}</KrleDescription>
            <KrleDescription>{data[2].fakultet}</KrleDescription>
          </KrleContainer>
        </TwoImagesContainer>

        <SecondTitleandDescriptionContainer>
          <SecondTitle>{data[0].secondTitle}</SecondTitle>
          <DescriptionTwo>{data[0].desxription1}</DescriptionTwo>
          <DescriptionTwo>{data[0].desxription2}</DescriptionTwo>
          <DescriptionTwo>{data[0].desxription3}</DescriptionTwo>
          <DescriptionTwo>{data[0].desxription4}</DescriptionTwo>
          <DescriptionTwo>{data[0].desxription5}</DescriptionTwo>
        </SecondTitleandDescriptionContainer>
        <RestOfTeamContainer>
          <RestOfTheTeamTitle>{data[0].restOfTeamTitle}</RestOfTheTeamTitle>
          <RestOfTeamContainerImages>
            <CardOfTeamMember>
              <ImageOfTeamMember src={dataCard[0].src} alt={dataCard[0].alt} />
              {dataCard[0].predavac}
            </CardOfTeamMember>
            <CardOfTeamMember>
              <ImageOfTeamMember src={dataCard[1].src} alt={dataCard[1].alt} />
              {dataCard[1].predavac}
            </CardOfTeamMember>
          </RestOfTeamContainerImages>
        </RestOfTeamContainer>
      </HeroContainer>
    </>
  );
};

export default Hero;
