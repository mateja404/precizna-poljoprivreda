// File: Prodaja.js
import React from "react";
import {
  KursCard,
  KursWrapper,
  KursH2,
  KursIcon,
  KursP,
  KursContainer,
  KursIconWrapper,
  KursH2PWrapper,
  KursPprice,
  SidebarContainer,
  SidebarList,
  SidebarItem,
} from "./ProdajaPageElements";
import { Link } from "react-router-dom";
import KursData from "./ProdajaData";

const Prodaja = () => {
  const displayItemsInSetsOfThree = [];
  for (let i = 0; i < KursData.length; i += 3) {
    const chunk = KursData.slice(i, i + 3);
    displayItemsInSetsOfThree.push(chunk);
  }
  const x = 2;
  return (
    <div style={{ display: "flex" }}>
      <KursContainer>
        {displayItemsInSetsOfThree.map((chunk, index) => (
          <KursWrapper key={index} title={x}>
            {chunk.map((item) => (
              <KursCard
                className="kurs-card"
                id="kurs-card"
                to={`/prodaja/${item.id}`}
                key={item.id}
                state={item}
              >
                <KursIconWrapper>
                  <KursIcon src={item.src} alt={item.alt} />
                </KursIconWrapper>
                <KursH2PWrapper>
                  <KursH2>{item.title}</KursH2>
                  <KursP>{item.description}</KursP>
                </KursH2PWrapper>
                <KursPprice>
                  <div className="burger-icon">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                  </div>
                  {item.price}
                </KursPprice>
              </KursCard>
            ))}
          </KursWrapper>
        ))}
      </KursContainer>
    </div>
  );
};

export default Prodaja;
