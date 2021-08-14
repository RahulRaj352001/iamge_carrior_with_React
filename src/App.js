import React, { useState, useEffect } from "react";
import Images from "./components/Images";
import "./css/style.css";



export default function App(props) {
  const [title, setTitle] = useState("hello react");
  const [isShowing, setIsShowing] = useState(false);
  function handleClick() {
    setIsShowing(!isShowing);
  }
  useEffect(() => {
  
  },) 
  return (
    <section className="flex justify-center">
      <div className="w-1/2">
        <div className=" text-center">
          <div className="my-4">Hello{title}</div>
          <button
            className="p-1 bg-blue-600 text-white my-2"
            onClick={handleClick}
          >
            toggle image
          </button>
          {isShowing === true ? <Images /> : null}
        </div>
      </div>
    </section>
  );
}
