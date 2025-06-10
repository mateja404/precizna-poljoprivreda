import React, { useState } from "react";
import {
  DropdownContainer,
  Arrow,
  Title,
  DropdownContent,
} from "./IndividualniKurs/IndKursElements";

import { dropdownsKurs } from "./IndividualniKurs/IndKursData";

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
const TestDropDownKurs = ({ kursId }) => {
  // Filter dropdownsKurs based on the kurs ID
  const filteredDropdowns = dropdownsKurs.filter(
    (dropdown) => dropdown.id === kursId
  );

  return (
    <div>
      {filteredDropdowns.map((dropdown, index) => (
        <Dropdown
          key={index}
          title={dropdown.title}
          options={dropdown.options}
        />
      ))}
    </div>
  );
};

export default TestDropDownKurs;
