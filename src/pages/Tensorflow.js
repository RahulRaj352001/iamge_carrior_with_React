import React, { useRef, useEffect, useState } from "react";

import useTFclassify from "../utils/hooks/useTFclassify";

export default function Tensorflow() {
  const imageRef = useRef();

  const [predict, prediction, isLoading] = useTFclassify();

  return (
    <div className="flex  mt-3 justify-center">
      <div className="w-1/3">
        <img
          className="text-center"
          src="https://images.unsplash.com/photo-1629480022439-c8563e803c3c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNTM4NTN8MHwxfGFsbHwyfHx8fHx8Mnx8MTYyOTU0NDE5Mg&ixlib=rb-1.2.1&q=85"
          ref={imageRef}
          width="300"
          alt=""
          crossOrigin="anonymous"
        />
        <div className="   m-2 ">
          {prediction.length > 0 &&
            prediction.map((prediction) => (
              <div className="flex border   bg-gray-3 00 justify-between">
                <p className="text-left ">{prediction.className}</p>
                <p>{Math.floor(prediction.probability * 100)} %</p>
              </div>
            ))}
          <button
            className="p-2 rounded relative left-2  w-40 bg-gray-700 text-white"
            onClick={() => predict(imageRef.current)}
          >
            {isLoading && "⏱ "}
            {!isLoading && "predict"}
          </button>
        </div>
      </div>
    </div>
  );
}
