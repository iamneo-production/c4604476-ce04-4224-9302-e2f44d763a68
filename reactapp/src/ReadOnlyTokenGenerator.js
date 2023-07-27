import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ReadOnlyTokenGenerator = ({ userId, pageId }) => {
  const [readOnlyToken, setReadOnlyToken] = useState('');

  const generateReadonlyToken = () => {
    // Combine user_id and page_id to create a unique string
    const dataToHash = `${userId}:${pageId}`;

    // Generate the token using UUID v4
    const token = uuidv4();

    setReadOnlyToken(token);
  };

  return (
    <div>
      <button onClick={generateReadonlyToken}>Generate Read-Only Token</button>
      {readOnlyToken && <p>Read-Only Token: {readOnlyToken}</p>}
    </div>
  );
};

export default ReadOnlyTokenGenerator;
