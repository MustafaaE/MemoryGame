import { useEffect, useState } from "react";
import useBoardLogic from "../../hooks/useBoardLogic";
import useFetchImages from "../../hooks/useFetchImages";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

import styles from "./Playfield.css";

const PlayField = ({ gameOptions }) => {
  const [loading, setLoading] = useState(true);
  const images = useFetchImages(gameOptions);

  const { cards, onClickedCard } = useBoardLogic(
    images,
    gameOptions.difficulty
  );
  //   console.log(cards);

  useEffect(() => {
    if (images.length > 0) setLoading(false);
  }, [images]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="play-field">
          {cards.map((card) => (
            <Card
              card={card}
              key={card.uniqueId}
              onClickedCard={onClickedCard}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayField;
