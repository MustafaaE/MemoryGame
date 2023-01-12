import { useEffect } from "react";

const useBoardLogic = (images) => {
  const prepareCards = () => {
    const obj = getImageObject(images);
    const shuffledObj = shuffleCards(obj);
    console.log(shuffledObj);
  };

  const getImageObject = (image) => {
    return image.map((img, i) => ({
      id: i,
      url: img.src.small,
      isShown: false,
      isFound: false,
    }));
  };

  const shuffleCards = (obj) => {
    const shuffledCards = [...obj, ...obj].sort(() => Math.random() - 0.5);
    return shuffledCards;
  };

  useEffect(() => {
    if (images.length > 0) {
      prepareCards();
    }
  }, [images]);
};

export default useBoardLogic;
