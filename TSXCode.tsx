import React from 'react';

const TSXCode: React.FC = () => {
  return (
    <div>
      <h2>TSX Code</h2>
      <pre>
        {`
import React from 'react';

const ExampleComponent: React.FC = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
};

export default ExampleComponent;
        `}
      </pre>
    </div>
  );
};

export default TSXCode;