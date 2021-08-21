import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce";
import useFatchImage from "../utils/hooks/useFatchImage";

import Image from "./Image";
import Loading from "./Loading";

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchItem, setSearchItem] = useState(null);
  const [Images, setImages, errors, isLoading] = useFatchImage(
    page,
    searchItem
  );
  function handleDelete(index) {
    setImages([
      ...Images.slice(0, index),
      ...Images.slice(index + 1, Images.length),
    ]);
  }

  function ShowImage() {
    const [showPreview, setShowPreview] = useState(false);

    return (
      <AnimateSharedLayout type="switch">
        <InfiniteScroll 
          dataLength={Images.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          className="flex flex-wrap"
        >
          {Images.map((img, index) => (
            <motion.div
              className=" w-1/5 p-1 border  flex justify-center"
              key={index}
              layoutId={img.urls.full}
            
            >
              <Image
                show={() => setShowPreview(img.urls.full)}
                image={img.urls.full}
                index={index}
                handleDelete={handleDelete}
              />
            </motion.div>
          ))}
        </InfiniteScroll>
        <AnimatePresence>
          {showPreview && (
            <motion.section
              layoutId={showPreview}
              
              exit={{ opacity: 0, rotate: 360, transition: { duration: 1 } }}

              className=" fixed  z-20 left-0  top-0 flex justify-center items-center  w-full h-full"
              onClick={() => setShowPreview(false)}
            >
              <div className="bg-white">
                <img alt="" src={showPreview} width="300" />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    );
  }
  const Debounce = useDebounce();
  function handleInput(e) {
    const text = e.target.value;
    Debounce(() => setSearchItem(text), 1000);
  }

  return (
    <section>
      <div className="my-5">
        <input
          className="w-full p-2 rounded shadow border-2"
          type="text"
          onChange={handleInput}
          placeholder="search photo here "
        />
      </div>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}
      <ShowImage />

      {isLoading && <Loading />}
    </section>
  );
}
