import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function Image({ image, index, handleDelete }) {
  const [ishover, setishover] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className=" w-1/5 p-1 border  flex justify-center" key={index}>
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
        <img
          onClick={() => setShowPreview(true)}
          alt=""
          src={image}
          width="100%"
        />
      </div>
      <AnimatePresence >
        {showPreview && (
          <motion.section 
            className=" fixed  z-20 left-0 right-0 bottom-0 top-0 justify-center items-center flex w-full h-full"
            onClick={() => setShowPreview(false)}
          >
            <motion.div className="bg-white">
              <motion.img alt="" src={image} width="400" />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
