import React, { useState } from "react";
import {
  DropdownContainer,
  Arrow,
  Title,
  DropdownContent,
} from "./IndividualnaUsluga/IndUslugaElements";

import { dropdowns } from "./IndividualnaUsluga/IndUslugaData";

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <Title onClick={() => setIsOpen(!isOpen)}>
        {title}
        <Arrow isOpen={isOpen} />
      </Title>
      <DropdownContent isOpen={isOpen}>
        {options.map((option) => (
          <div key={option}>{option}</div>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

// Usage
const TestDropDown = () => {
  return (
    <div>
      {dropdowns.map((dropdown, index) => (
        <Dropdown
          key={index}
          title={dropdown.title}
          options={dropdown.options}
        />
      ))}
    </div>
  );
};

export default TestDropDown;
