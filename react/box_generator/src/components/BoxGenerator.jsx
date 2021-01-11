import React, { useState } from 'react';

const BoxGenerator = (props) => {
  // Empty array is essentially a list of boxes in array that will be used to be displayed
  const [allBoxes, setAllBoxes] = useState([]);
  // Keep track of what color user types in
  const [color, setColor] = useState("");
  const addColor = (e) => {
    e.preventDefault();
    setAllBoxes([...allBoxes, color])
  }

  return (
    <div>
      <h1>{color}</h1>
      {/* event when submit happens */}
      <form onSubmit={addColor}>
        <input onChange={(e) => {
          setColor(e.target.value);

        }} type="text" />
        <button>Add!</button>
      </form>

      <div>
        {allBoxes.map((thisColor, index) => <div className="box" key={index} style={{ backgroundColor: thisColor }}></div>)}
      </div>
    </div>

  );
};


export default BoxGenerator;