import React from 'react';
import DynamicSVG from './DynamicSVG';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <DynamicSVG height={600} width={100} arcRadius={500} />
      {/* Commented out SVGs */}
      {/* <DynamicSVG height={300} width={400} arcRadius={120} /> */}
      {/* <DynamicSVG height={400} width={500} arcRadius={160} /> */}
    </div>
  );
}

export default App;
