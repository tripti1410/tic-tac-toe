import React from "react";
import "./board-box.css";

function BoardBox({ value, onClick }) {
  return (
    <button role="button" className='board-box' disabled={value} onClick={onClick}>
      {value}
    </button>
  );
}

export default BoardBox;
