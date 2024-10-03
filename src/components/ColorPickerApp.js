import React from "react";
import { useState, useEffect } from "react";

const ColorPickerApp = () => {
    const [color, setColor] = useState("blue");
  
    const handleColorChange = (event) => {
      setColor(event.target.value); 
    };
  
    return (
      <section className="color-section" style={{ backgroundColor: color }}>
        <label htmlFor="color-select">Choose a background color:</label>
        <select id="color-select" value={color} onChange={handleColorChange}>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="grey">Grey</option>
          <option value="red">Red</option>
        </select>
      </section>
    );
  };
  
  export default ColorPickerApp;