import React, { useState } from "react";

export default function Image({ image, index, handleDelete,show }) {
  const [ishover, setishover] = useState(false);

  return (
    
      <div
        className="relative "
        onMouseEnter={() => setishover(true)}
        onMouseLeave={() => setishover(false)}
      >
        <i
          className={`fas fa-times absolute right-0 cursor-pointer opacity-25 ${
            ishover ? "" : "hidden"
          } hover:opacity-90 `}
          onClick={() => handleDelete(index)}
        >
          {" "}
        </i>
        <img
          onClick={show}
          alt=""
          src={image}
          width="100%"
        />
      </div>
      
   
  );
}
