const CHANGE = 2;
const CardCounter = ({ cardsCount, onClick }) => {
  const decreaseCard = (e) => {
    e.preventDefault();
    const amount = cardsCount - CHANGE;
    if (amount >= 2) {
      onClick(amount);
    }
  };

  const increaseCard = (e) => {
    e.preventDefault();
    const amount = cardsCount + CHANGE;
    if (amount <= 100) {
      onClick(amount);
    }
  };

  return (
    <div>
      <button className="minus" onClick={decreaseCard}>
        -
      </button>
      <span>{cardsCount}</span>
      <button className="plus" onClick={increaseCard}>
        +
      </button>
    </div>
  );
};

export default CardCounter;
