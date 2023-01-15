import { useEffect, useState } from "react";
import useBoardLogic from "../../hooks/useBoardLogic";
import useFetchImages from "../../hooks/useFetchImages";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Winner from "../Winner/Winner";

import "./Playfield.css";

const PlayField = ({ gameOptions, startOver }) => {
  const [loading, setLoading] = useState(true);
  const images = useFetchImages(gameOptions);

  const { cards, onClickedCard, win } = useBoardLogic(
    images,
    gameOptions.difficulty
  );

  useEffect(() => {
    if (images.length > 0) setLoading(false);
  }, [images]);

  return (
    <div>
      {win && <Winner startOver={startOver} />}
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
