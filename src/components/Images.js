import React, { useState } from "react";

export default function Images() {
  const [Images, setImages] = useState([
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2734&q=80",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2906&q=80",
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
  ]);
  const [newImgUrl, setNewImgUrl] = useState("");
  function ShowImage() {
    return Images.map((image) => {
      return (
        <div className="w-1/3 my-4">
          <img src={image} alt="" width="150" />
        </div>
      );
    });
  }
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
