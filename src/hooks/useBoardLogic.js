import { useEffect, useState } from "react";

const useBoardLogic = (images) => {
  const [cards, setCards] = useState([]);

  const prepareCards = () => {
    const obj = getImageObject(images);
    const shuffledObj = shuffleCards(obj);
    setCards(shuffledObj);
  };

  const getImageObject = (image) => {
    return image.map((img, i) => ({
      id: i,
      url: img.src.medium,
      isShown: false,
      isFound: false,
    }));
  };

  const shuffleCards = (obj) => {
    const shuffledCards = [...obj, ...obj]
      .map((img, i) => ({ ...img, uniqueId: i }))
      .sort(() => Math.random() - 0.5);
    return shuffledCards;
  };

  useEffect(() => {
    if (images.length > 0) {
      prepareCards();
    }
  }, [images]);

  const onClickedCard = (clickedUniqueId) => {
    flipCard(clickedUniqueId);
  };

  const flipCard = (clickedUniqueId) => {
    console.log({ clickedUniqueId });
    const flippedCards = cards.map((card) => {
      if (card.uniqueId === clickedUniqueId) {
        card.isShown = true;
      }
      return card;
    });

    setCards(flippedCards);
  };
  return { cards, onClickedCard };
};

export default useBoardLogic;
