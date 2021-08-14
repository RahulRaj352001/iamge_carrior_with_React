import React, { useState, useEffect } from "react";
import Images from "./components/Images";
import "./css/style.css";



export default function App(props) {
  const [title, setTitle] = useState("hello react");
  

  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className=" text-center">
          <div className="my-4">Hello{title}</div>
         <Images/>
        </div>
      </div>
    </section>
  );
}
