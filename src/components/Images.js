import React, { useState } from "react";

export default function Images() {
  const [Images, setImages] = useState([
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2734&q=80",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2906&q=80",
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
  ]);

  function ShowImage() {
    return Images.map((image) => {
      return (
        <div className="w-1/3">
          <img src={image} alt="" width="250" />
        </div>
      );
    });
  }
  function handleAdd() {
    setImages([
      ...Images,
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
    ]);
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
          />
        </div>
        <button
          onClick={handleAdd}
          className={`p-2 border bg-green-400 ml-2 border-gray-800 text-white  `}
        >
          add{" "}
        </button>
      </div>
    </section>
  );
}
