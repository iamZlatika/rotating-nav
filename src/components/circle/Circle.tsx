import React from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CircleProps {
  onToggle: () => void;
}

const Circle: React.FC<CircleProps> = ({ onToggle }) => {
  return (
    <div className="circle-container">
      <div className="circle">
        <button className="close" onClick={onToggle}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button className="open" onClick={onToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
};

export default Circle;
