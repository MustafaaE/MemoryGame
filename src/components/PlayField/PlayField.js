import { useEffect, useState } from "react";
import useBoardLogic from "../../hooks/useBoardLogic";
import useFetchImages from "../../hooks/useFetchImages";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const PlayField = ({ gameOptions }) => {
  const [loading, setLoading] = useState(true);
  const images = useFetchImages(gameOptions);

  const cards = useBoardLogic(images);
  console.log(cards);

  useEffect(() => {
    if (images.length > 0) setLoading(false);
  }, [images]);

  return (
    <div>
      {!loading ? (
        <Loading />
      ) : (
        cards.map((card) => <Card card={card} key={card.uniqueId} />)
      )}
    </div>
  );
};

export default PlayField;
