import { useEffect } from "react";

const useFetchImages = () => {
  const fetchImages = () => {
    fetch("https://api.pexels.com/v1/search?query=nature", {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetchImages();
  }, []);
};
export default useFetchImages;
