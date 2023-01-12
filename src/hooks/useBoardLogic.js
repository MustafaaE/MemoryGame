import { useEffect } from "react";

const useBoardLogic = (images) => {
  const prepareCards = () => {
    const obj = getImageObject(images);
    console.log(obj);
  };

  const getImageObject = (image) => {
    return image.map((img, i) => ({
      id: i,
      url: img.src.small,
      isShown: false,
      isFound: false,
    }));
  };

  useEffect(() => {
    if (images.length > 0) {
      prepareCards();
    }
  }, [images]);
};

export default useBoardLogic;
