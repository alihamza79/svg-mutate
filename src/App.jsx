import { useState } from 'react';
import './App.css';
import DynamicSVG from './DynamicSVG';

function App() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);
  const [arcRadius, setArcRadius] = useState(50);
  const [cornerWidth, setCornerWidth] = useState(35);
  const [cornerHeight, setCornerHeight] = useState(25);

  return (
    <>
      <DynamicSVG
        width={width}
        height={height}
        arcRadius={arcRadius}
        cornerWidth={cornerWidth}
        cornerHeight={cornerHeight}
      />
      <div>
        <label>
          Width (A):
          <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} />
        </label>
        <label>
          Height (B):
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
        </label>
        <label>
          Arc Radius (C):
          <input type="number" value={arcRadius} onChange={(e) => setArcRadius(Number(e.target.value))} />
        </label>
        <label>
          Corner Width (D):
          <input type="number" value={cornerWidth} onChange={(e) => setCornerWidth(Number(e.target.value))} />
        </label>
        <label>
          Corner Height (E):
          <input type="number" value={cornerHeight} onChange={(e) => setCornerHeight(Number(e.target.value))} />
        </label>
      </div>
    </>
  );
}

export default App;
