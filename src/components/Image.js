import React, { useState } from "react";
import PropTypes from "prop-types";
function Image({ image, index, handleDelete, show }) {
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
      <img onClick={show} alt="" src={image} width="100%" />
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
