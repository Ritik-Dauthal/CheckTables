import React, { useState } from 'react';
import Tablerow from './Tablerow';

function Table(){
  let [num, UpdateNum] = useState(2);
  let [upto, Setupto] = useState(10);

  let rows = [];
  for (let i = 1; i<= upto; i++) {
    rows.push (<Tablerow number= {num} index= {i} />)
              
  }
  function handleNumChange(event) {
  
  UpdateNum(event.target.value);
}
  function handleUptoChange(event) {
  
  Setupto(event.target.value);
}
  return (
    <div>
    <div>
    <div className="p-2">{num > 20 ? <div>Nice job ! </div>:<div>mehnat krr lo bhai </div>}</div>
     <input className="border border-gray-700 rounded-end"onChange={handleNumChange} value={num}/>

     <input className="border border-gray-700 rounded-end"onChange={handleUptoChange} value={upto}/>
   </div>
    {rows}
  </div>
  );
}

export default Table;