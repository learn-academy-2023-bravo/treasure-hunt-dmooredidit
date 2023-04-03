import React from "react";

const Square = ({ square, index, handleGamePlay }) => {
  const handleClick = ({ Square }) => {
    alert(index);
  };

  return (
    <>
      <div className="square" onClick={handleClick}>
        {square}
      </div>
    </>
  );
};
export default Square;
