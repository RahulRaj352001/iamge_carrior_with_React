import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import useTFclassify from "../utils/hooks/useTFclassify";
function Image({ image, index, handleDelete, show }) {
  const [ishover, setishover] = useState(false);
  const imageRef = useRef("");
  const [predict, prediction,setPrediction, isLoading] = useTFclassify();

  return (
    <div
      className="relative "
      onMouseEnter={() => setishover(true)}
      onMouseLeave={() => setishover(false)}
    >
        {(prediction.length > 0 || isLoading) && (
        <span
          className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5"
          onClick={() => setPrediction([])}
        >
          {isLoading && <p>Fetching results...</p>}
          {prediction.map((prediction) => (
            <div key={Math.floor(prediction.probability * 100)} className="flex justify-between text-sm">
              <p>{prediction.className}</p>
              <p>{Math.floor(prediction.probability * 100)} %</p>
            </div>
          ))}
        </span>
      )}
      <i
        className={`fas fa-times absolute right-0 cursor-pointer opacity-25 ${
          ishover ? "" : "hidden"
        } hover:opacity-90 `}
        onClick={() => handleDelete(index)}
      >
        {" "}
      </i>
      <i
        className={`fas fa-search absolute left-0 cursor-pointer opacity-25 ${
          ishover ? "" : "hidden"
        } hover:opacity-90 `}
        onClick={() => predict(imageRef.current)}
      >
        {" "}
      </i>
      <img
        ref={imageRef}
        crossOrigin="anonymous"
        onClick={show}
        alt=""
        src={image}
        width="100%"
      />
    </div>
  );
}
// const types = {
//   function(props, propName)  {
//     if (typeof props[propName] !== "function") {
//       return new Error(
//         ` '${propName}' must be a function but u provide ${typeof props[
//           propName
//         ]}`
//       );
//     }
//   },
//   index(props, propName)  {
//     if (typeof props[propName] !== "number") {
//       return new Error(
//         ` '${propName}' must be a number but u provide ${typeof props[
//           propName
//         ]}`
//       );
//     }
//   },
// }

Image.propTypes = {
  show: PropTypes.func,
  index: PropTypes.number,
  image: PropTypes.string,
  handleDelete: PropTypes.func,
};

export default Image;
