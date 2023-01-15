import styles from "./Card.css";

const Card = ({ card, onClickedCard }) => {
  //   console.log(card);

  const onClick = () => {
    if (card.isShown || card.isFound) return;
    onClickedCard(card.uniqueId);
  };

  return (
    <div className="container" onClick={onClick}>
      <div className={"card" + (card.isShown ? "-flipped" : "")}>
        <div className={"back"}>
          <img src={card.url} alt="" width="200" />
        </div>
        <div className={"front" + (card.isFound ? "-found" : "")}></div>
      </div>
    </div>
  );
};

export default Card;
