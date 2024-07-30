import React, { useState } from 'react';
import DynamicSVG from './DynamicSVG';

function App() {
  const [formData, setFormData] = useState({
    height: 130,
    width: 540,
    arcRadius: 112,
    cornerWidth: 75,
    cornerHeight: 23,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseInt(value),
    }));
  };

  return (
    <div>
      <form style={{ marginBottom: '20px' }}>
        <div>
        <div>
          <label>
            Width:
            <input type="number" name="width" value={formData.width} onChange={handleChange} />
          </label>
        </div>
          <label>
            Height:
            <input type="number" name="height" value={formData.height} onChange={handleChange} />
          </label>
        </div>
        
        <div>
          <label>
            Arc Radius:
            <input type="number" name="arcRadius" value={formData.arcRadius} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Corner Width:
            <input type="number" name="cornerWidth" value={formData.cornerWidth} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Corner Height:
            <input type="number" name="cornerHeight" value={formData.cornerHeight} onChange={handleChange} />
          </label>
        </div>
      </form>

      <div style={{ height: '60vh', width: '80vw', padding: '40px' }}>
        <DynamicSVG
          height={formData.height}
          width={formData.width}
          arcRadius={formData.arcRadius}
          cornerWidth={formData.cornerWidth}
          cornerHeight={formData.cornerHeight}
        />
      </div>
    </div>
  );
}

export default App;
