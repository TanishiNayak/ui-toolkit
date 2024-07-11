import React, { useState } from 'react';
//import './App.css';

interface CheckedItems {
  option: boolean;
  subOptions: {
    laptops: boolean;
    tvs: boolean;
    microphones: boolean;
  };
}

const CheckboxTree: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    option: false,
    subOptions: {
      laptops: false,
      tvs: false,
      microphones: false,
    },
  });

  const handleOptionChange = () => {
    const newChecked = !checkedItems.option;
    setCheckedItems({
      option: newChecked,
      subOptions: {
        laptops: newChecked,
        tvs: newChecked,
        microphones: newChecked,
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
          <label htmlFor="option"> Electronics</label>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  className="subOption"
                  checked={checkedItems.subOptions.laptops}
                  onChange={() => handleSubOptionChange('laptops')}
                />
                Laptops
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  className="subOption"
                  checked={checkedItems.subOptions.tvs}
                  onChange={() => handleSubOptionChange('tvs')}
                />
                TVs
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  className="subOption"
                  checked={checkedItems.subOptions.microphones}
                  onChange={() => handleSubOptionChange('microphones')}
                />
                Microphones
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CheckboxTree;