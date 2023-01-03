import { useEffect, useRef, useState } from "react";

const getRandomPage = () => Math.round(Math.random() * (5 - 1) + 1);

const useFetchImages = () => {
  const dataFetchedRef = useRef(false);
  const [images, setImages] = useState([]);

  const createURL = () => {
    let url = new URL("https://api.pexels.com/v1/search");

    url.search = new URLSearchParams({
      query: "nature",
      orientation: "square",
      size: "small",
      per_page: 1,
      page: getRandomPage(),
    });
    return url;
  };

  const fetchPics = async () => {
    await fetch(createURL(), {
      //   mode: "cors",
      headers: {
        Authorization: process.env.REACT_APP_AUTH_KEY,
      },
    })
      .then((data) => data.json())
      .then((data) => setImages(data.photos));
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchPics();
  }, []);

  return images;
};
export default useFetchImages;
