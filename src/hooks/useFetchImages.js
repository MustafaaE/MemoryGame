import { useEffect, useRef, useState } from "react";

const getRandomPage = () => Math.round(Math.random() * (2 - 1) + 1);

const useFetchImages = (gameSettings) => {
  // const dataFetchedRef = useRef(false);
  const [images, setImages] = useState([]);

  const createURL = () => {
    let url = new URL("https://api.pexels.com/v1/search");

    url.search = new URLSearchParams({
      query: gameSettings.searchTerm,
      orientation: "square",
      size: "medium",
      per_page: gameSettings.cardsCount / 2,
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
    // if (dataFetchedRef.current) return;
    // dataFetchedRef.current = true;
    if (!gameSettings) return;
    fetchPics();
  }, [gameSettings]);

  return images;
};
export default useFetchImages;
