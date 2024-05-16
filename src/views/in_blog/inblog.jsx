import React, { useState } from 'react';
import BlogImg from './BlogImg';
import BlogText from './BlogText';
import BlogTitle from './BlogTitle';
import BlogIcon from './BlogIcon';

function App() {
  const [state, setState] = useState(null);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>
        <BlogTitle />
        <BlogImg />
        <BlogText />
        <BlogIcon/>
      </div>
    </div>
  );
}

export default App;
