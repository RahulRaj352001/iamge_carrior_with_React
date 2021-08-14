import React,{useState} from 'react'

export default function Image({image, index,handleDelete}) {
    const [ishover, setishover] = useState(false);

    return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
        <div
          className="relative "
          onMouseEnter={() => setishover(true)}
          onMouseLeave={() => setishover(false)} >
          <i   className={`fas fa-times absolute right-0 cursor-pointer opacity-25 ${
              ishover ? "" : "hidden"
            } hover:opacity-90 `}
            onClick={() => handleDelete(index)} > </i>
          <img alt="" src={image} width="150" />
        </div>
      </div>
    )
}
