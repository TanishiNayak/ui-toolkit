// src/components/HeroSection/HeroSection.tsx

import React, { useState } from 'react';
import styles from './Divider.module.css';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleOpen} style={{ display: 'block', width: '100%' }}>
        {title}
      </button>
      {isOpen && <div style={{ paddingLeft: '1rem' }}>{children}</div>}
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <div>
      <AccordionItem title="Item 1">
        <p>Content of Item 1</p>
        <AccordionItem title="Item 1.1">
          <p>Content of Item 1.1</p>
          <AccordionItem title="Item 1.1.1">
            <p>Content of Item 1.1.1</p>
          </AccordionItem>
        </AccordionItem>
      </AccordionItem>
      <AccordionItem title="Item 2">
        <p>Content of Item 2</p>
      </AccordionItem>
      <AccordionItem title="Item 3">
        <p>Content of Item 3</p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;


