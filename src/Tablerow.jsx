import React from 'react';

function Tablerow({number, index }) {
  return (
    <div className="text-blue-800 bg-cyan-200">
      {number} * {index} = {number * index}
    </div>
  );
}

export default Tablerow;