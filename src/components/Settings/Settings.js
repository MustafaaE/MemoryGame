import { useState } from "react";
import { DIFFICULTY, CARDS_COUNT, DEFAULT_SEARCH } from "../../Constants";
import styles from "./Settings.css";

import Radiobox from "../RadioBox/Radiobox";
import CardCounter from "../CardCounter/CardCounter";

const getRandomSearch = () => Math.round(Math.random() * (5 - 1) + 1);

const Settings = ({ startGame }) => {
  const [difficulty, setDifficulty] = useState(DIFFICULTY[1]);
  const [cardsCount, setCardsCount] = useState(CARDS_COUNT);
  const [searchTerm, setSearchTerm] = useState(
    DEFAULT_SEARCH[getRandomSearch()]
  );

  const startGameButton = () => {
    startGame({ difficulty, cardsCount, searchTerm });
  };

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="settings">
      <h2 className="setting-header">Settings</h2>

      <h4 className="difficulty-header">Difficulty:</h4>
      <div className="radiobox">
        {DIFFICULTY.map((item) => (
          <Radiobox
            key={item}
            name={item}
            selectedItem={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          />
        ))}
      </div>

      <h4 className="amount-header">Card amount</h4>
      <CardCounter cardsCount={cardsCount} onClick={setCardsCount} />

      <h4 className="search-header">Category</h4>
      <div className="search-field">
        <input
          className="search-input"
          type="search"
          id="search"
          name="search"
          defaultValue={searchTerm}
          onChange={onChangeHandler}
        />
      </div>

      {/* <div className="username-field">
        <label htmlFor="username">Username </label>
        <input type="username" id="username" name="username" />
      </div> */}

      <button className="start-button" onClick={startGameButton}>
        Start
      </button>
    </div>
  );
};

export default Settings;
