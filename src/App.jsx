import React from 'react';
import DynamicSVG from './DynamicSVG';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <DynamicSVG height={130} width={140} arcRadius={32} cornerWidth={75} cornerHeight={23} />
      {/* Commented out SVGs */}
      {/* <DynamicSVG height={300} width={400} arcRadius={120} cornerWidth={50} cornerHeight={50} /> */}
      {/* <DynamicSVG height={400} width={500} arcRadius={160} cornerWidth={70} cornerHeight={70} /> */}
    </div>
  );
}

export default App;
