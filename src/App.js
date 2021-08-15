import React from "react";
import Images from "./components/Images";
import "./css/style.css";



export default function App(props) {
 
  

  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className=" text-center">
          
         <Images/>
        </div>
      </div>
    </section>
  );
}
