import { useState } from "react";
import { DIFFICULTY, CARDS_COUNT, DEFAULT_SEARCH } from "../../Constants";

import Radiobox from "../RadioBox/Radiobox";

const getRandomSearch = () => Math.round(Math.random() * (5 - 1) + 1);

const Settings = () => {
  const [difficulty, setDifficulty] = useState(DIFFICULTY[1]);
  const [cardsCount, setCardsCount] = useState(CARDS_COUNT);
  const [searchTerm, setSearchTerm] = useState(
    DEFAULT_SEARCH[getRandomSearch()]
  );

  return (
    <div className="settings">
      <h2>settings</h2>

      <h4>difficulty:</h4>
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

      <div className="search-field">
        <label htmlFor="search">Type theme </label>
        <input
          type="search"
          id="search"
          name="search"
          defaultValue={searchTerm}
        />
      </div>

      <div className="username-field">
        <label htmlFor="username">Username </label>
        <input
          type="username"
          id="username"
          name="username"
          placeholder="username"
        />
      </div>

      <button className="start-button"> Start</button>
    </div>
  );
};

export default Settings;
