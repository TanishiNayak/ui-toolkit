import React, { useState } from 'react';
//import './App.css';

interface CheckedItems {
  option: boolean;
  subOptions: {
    selector1: boolean;
    selector2: boolean;
    selector3: boolean;
  };
}

const SelectorComponent: React.FC<{ header: string }> = ({ header }) => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    option: false,
    subOptions: {
      selector1: false,
      selector2: false,
      selector3: false,
    },
  });

  const handleOptionChange = () => {
    const newChecked = !checkedItems.option;
    setCheckedItems({
      option: newChecked,
      subOptions: {
        selector1: newChecked,
        selector2: newChecked,
        selector3: newChecked,
      },
    });
  };

  const handleSubOptionChange = (subOption: keyof CheckedItems['subOptions']) => {
    const newSubOptions = {
      ...checkedItems.subOptions,
      [subOption]: !checkedItems.subOptions[subOption],
    };

    const allChecked = Object.values(newSubOptions).every((value) => value);
    const anyChecked = Object.values(newSubOptions).some((value) => value);

    setCheckedItems({
      option: allChecked,
      subOptions: newSubOptions,
    });

    const checkAllBox = document.getElementById('option') as HTMLInputElement;
    checkAllBox.indeterminate = anyChecked && !allChecked;
  };

  return (
    <div className="container">
      <ul>
        <li>
          <input
            type="checkbox"
            id="option"
            checked={checkedItems.option}
            onChange={handleOptionChange}
          />
          <label htmlFor="option"> {header}</label>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  className="subOption"
                  checked={checkedItems.subOptions.selector1}
                  onChange={() => handleSubOptionChange('selector1')}
                />
                Selector Label 1
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  className="subOption"
                  checked={checkedItems.subOptions.selector2}
                  onChange={() => handleSubOptionChange('selector2')}
                />
                Selector Label 2
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  className="subOption"
                  checked={checkedItems.subOptions.selector3}
                  onChange={() => handleSubOptionChange('selector3')}
                />
                Selector Label 3
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const CheckboxTree: React.FC = () => {
  return (
    <div>
      <SelectorComponent header="Header 1" />
      <SelectorComponent header="Header 2" />
      <SelectorComponent header="Header 3" />
      <SelectorComponent header="Header 4" />
    </div>
  );
};

export default CheckboxTree;