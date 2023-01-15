import { useEffect, useState } from "react";

const DIFFICULTY = {
  Easy: 1500,
  Medium: 1000,
  Hard: 500,
  Hell: 150,
};

const useBoardLogic = (images, difficulty) => {
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);

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
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const onClickedCard = (clickedUniqueId) => {
    if (visibleCards.length < 2) {
      flipCard(clickedUniqueId);
    }
  };

  const flipCard = (clickedUniqueId) => {
    const flippedCards = cards.map((card) => {
      if (card.uniqueId === clickedUniqueId) {
        card.isShown = true;
      }
      if (card.isShown) {
        setVisibleCards((fill) => [...fill, card.uniqueId]);
      }
      return card;
    });

    setCards(flippedCards);
  };

  const updateScore = () => {
    setScore((oldScore) => oldScore + 1);
  };

  const checkIfMatch = () => {
    const shownCards = cards.filter(
      (card) => visibleCards.indexOf(card.uniqueId) !== -1
    );
    const matched = shownCards[0].id === shownCards[1].id;

    const updatedCards = cards.map((card) => {
      if (visibleCards.indexOf(card.uniqueId) !== -1) {
        card.isShown = false;
        card.isFound = matched;
      }
      return card;
    });
    setTimeout(() => {
      setCards(updatedCards);
      setVisibleCards([]);
      if (matched) {
        updateScore();
      }
    }, DIFFICULTY[difficulty]);
  };

  useEffect(() => {
    if (visibleCards.length >= 2) {
      checkIfMatch();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCards]);

  useEffect(() => {
    if (images.length && score === images.length) {
      setWin(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return { cards, onClickedCard, win };
};

export default useBoardLogic;
