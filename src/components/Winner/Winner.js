import "./Winner.css";

const Winner = ({ startOver }) => {
  return (
    <div className="winner">
      <p className="celebrate">well done!😁🎉🥳</p>
      <button className="play-again" onClick={startOver}>
        <span>play again?</span>
      </button>
    </div>
  );
};

export default Winner;
