import React, { useState, useEffect, useRef } from "react";
import Image from "./Image";

export default function Images() {
  const [Images, setImages] = useState([
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2734&q=80",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2906&q=80",
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
  ]);
  const [newImgUrl, setNewImgUrl] = useState("");
  function handleDelete(index) {
    setImages([
      ...Images.slice(0, index),
      ...Images.slice(index + 1, Images.length),
    ]);
  }
  function ShowImage() {
    return Images.map((img, index) => (
      <Image key={index} image={img} index={index} handleDelete={handleDelete} />
    ));
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  function handleAdd() {
    if (newImgUrl !== " ") {
      setImages([...Images, newImgUrl]);
      setNewImgUrl("");
    }
  }

  function handleChange(event) {
    setNewImgUrl(event.target.value);
  }
  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-around my-3">
        <div className="w-full">
          <input
            type="text"
            className="p-2 border w-full border-gray-800 shadow rounded"
            ref={inputRef}
            value={newImgUrl}
            onChange={handleChange}
          />
        </div>
        <button
          disabled={newImgUrl === ""}
          className={`p-2 border ml-2 border-gray-800  ${
            newImgUrl !== "" ? "bg-gray-400" : "bg-red-100"
          }`}
          onClick={handleAdd}
        >
          add
        </button>
      </div>
    </section>
  );
}
