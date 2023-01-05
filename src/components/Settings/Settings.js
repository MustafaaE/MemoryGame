import { useState } from "react";
import { DIFFICULTY, CARDS_COUNT } from "../../Constants";

import Radiobox from "../RadioBox/Radiobox";

const Settings = () => {
  const [difficulty, setDifficulty] = useState(DIFFICULTY[1]);
  const [cardsCount, setCardsCount] = useState(CARDS_COUNT);

  return (
    <div className="settings">
      <h2>settings</h2>

      <h4>difficulty:</h4>
      <div>
        {DIFFICULTY.map((item) => (
          <Radiobox
            key={item}
            name={item}
            selectedItem={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
