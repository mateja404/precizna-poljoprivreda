import React from "react";
import {
  UslugeCardsCard,
  UslugeCardsWrapper,
  UslugeCardsH2,
  UslugeCardsIcon,
  UslugeCardsP,
  UslugeCardsContainer,
  UslugeCardsIconWrapper,
  UslugeCardsH2PWrapper,
  UslugeLink,
} from "./UslugePageElements";
import UslugeData from "./UslugeData";

const UslugeCards = () => {
  const displayItemsInSetsOfThree = [];
  for (let i = 0; i < UslugeData.length; i += 3) {
    const chunk = UslugeData.slice(i, i + 3);
    displayItemsInSetsOfThree.push(chunk);
  }

  return (
    <>
      <UslugeCardsContainer>
        {displayItemsInSetsOfThree.map((chunk, index) => (
          <UslugeCardsWrapper key={index}>
            {chunk.map((item) => (
              <UslugeCardsCard
                id="kurs-card"
                to={`/usluga/${item.id}`}
                key={item.id}
                state={item}
              >
                <UslugeCardsIconWrapper>
                  <UslugeCardsIcon src={item.src} alt={item.alt} />
                </UslugeCardsIconWrapper>
                <UslugeCardsH2PWrapper>
                  <UslugeCardsH2>{item.title}</UslugeCardsH2>
                  <UslugeCardsH2>{item.title2}</UslugeCardsH2>
                  <UslugeCardsP>{item.description}</UslugeCardsP>
                </UslugeCardsH2PWrapper>
              </UslugeCardsCard>
            ))}
          </UslugeCardsWrapper>
        ))}
      </UslugeCardsContainer>
    </>
  );
};

export default UslugeCards;
