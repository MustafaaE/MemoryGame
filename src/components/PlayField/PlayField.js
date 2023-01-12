import { useEffect, useState } from "react";
import useBoardLogic from "../../hooks/useBoardLogic";
import useFetchImages from "../../hooks/useFetchImages";

const PlayField = ({ gameOptions }) => {
  const [loading, setLoading] = useState(true);
  const images = useFetchImages(gameOptions);

  //   console.log({ images });

  const cards = useBoardLogic(images);

  useEffect(() => {
    if (images.length > 0) setLoading(false);
  }, [images]);

  return <div>{!loading ? <p>hej</p> : <p>hejdå</p>}</div>;
};

export default PlayField;
