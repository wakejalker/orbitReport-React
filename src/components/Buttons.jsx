import { useCallback, useState } from 'react';
import satData from './satData';
import './styling.css?inline';

const Buttons = ({ filterByType, setSat, displaySats }) => {

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (sat) => {
    filterByType(sat);
    setSelectedButton(sat);
  }

  return (
  <div className="flex-container">
    {displaySats.map((sat, id) => (
          <button key={id} 
            onClick={() => handleButtonClick(sat)}
            className={selectedButton === sat ? 'selected-button' : ''}
            >
              {sat} Orbit
          </button>
            
            
    ))}
         <button 
            onClick={() => {
            setSat(satData);
            setSelectedButton(null);
            }}
            className={selectedButton === null ? 'selected-button' : ''}
            >
            All Orbits
            </button>
  </div>
  );   
};   

export default Buttons;