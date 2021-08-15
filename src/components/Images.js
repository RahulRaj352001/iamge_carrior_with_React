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
    return (
      <InfiniteScroll
        dataLength={Images.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        className="flex flex-wrap"
      >
        {Images.map((img, index) => (
          <Image
            key={index}
            image={img.urls.full}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </InfiniteScroll>
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
