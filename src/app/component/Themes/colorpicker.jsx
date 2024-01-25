// ColorPicker.jsx
import { useState } from 'react';

const ColorPicker = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState('green');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <div>
      <label htmlFor="colorPicker">Choose Matrix Color: </label>
      <input
        type="color"
        id="colorPicker"
        value={selectedColor}
        onChange={(e) => handleColorChange(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
