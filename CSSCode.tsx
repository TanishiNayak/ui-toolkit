import React from 'react';

const CSSCode: React.FC = () => {
  return (
    <div>
      <h2>CSS Code</h2>
      <pre>
        {`
.example-component {
  font-family: Arial, sans-serif;
  color: #333;
}
        `}
      </pre>
    </div>
  );
};

export default CSSCode;