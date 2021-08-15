// import axios from "axios";
// import React, { useState, useEffect } from "react";
// const url = process.env.REACT_APP_UNSPLASH_URL;
// const secretid = process.env.REACT_APP_UNSPLASH_KEY;

// export default function useFetchImage(page, searchItem) {
//   const [Images, setImages] = useState([]);
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   function fatchSearch() {
//     setIsLoading(true);
//     axios
//       .get(
//         `${url}/search/photos/?client_id=${secretid}&page=${page}&query=${searchItem}`
//       )
//         .then((res) => {
//           if (page>1) {
              
//               setImages([ ...Images,...res.data.results]);
//             } else {
//               setImages([...res.data.results]);
              
//           }

//         setIsLoading(false);
//       })
//       .catch((e) => {
//         setErrors(["error"]);
//         setIsLoading(false);
//       });
//   }
//   function fatchrandom() {
//     axios
//       .get(`${url}/photos/?client_id=${secretid}&page=${page}`)
//       .then((res) => {
//         setImages([...Images, ...res.data]);

//         setIsLoading(false);
//       })
//       .catch((e) => {
//         setErrors(["error"]);
//         setIsLoading(false);
//       });
//   }
//   useEffect(() => {
//     setIsLoading(true);
//      if (searchItem !== null) {
//          fatchSearch()
//      }
//      else {
//          fatchrandom()
//       }
//   }, [page ,searchItem]);
//   useEffect(() => {
//     if (searchItem === null) return;

//     fatchSearch();
// //   }, [searchItem]);
//   return [Images, setImages, errors, isLoading];
// }

// second more short 

import React, { useState, useEffect } from "react";
import Axios from "axios";

const api = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page, searchTerm) {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetch() {
    const url =
      searchTerm === null ? "photos?" : `search/photos?query=${searchTerm}&`;
    Axios.get(`${api}/${url}client_id=${secret}&page=${page}`)
      .then((res) => {
        searchTerm === null ? fetchRandom(res) : fetchSearch(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(["Unable to fetch images"]);
        setIsLoading(false);
      });
  }

  function fetchSearch(res) {
    page > 1
      ? setImages([...images, ...res.data.results])
      : setImages([...res.data.results]);
  }

  function fetchRandom(res) {
    setImages([...images, ...res.data]);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch();
  }, [page, searchTerm]);

  return [images, setImages, errors, isLoading];
}
