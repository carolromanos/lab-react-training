import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import getRandom from '../helpers/helper-functions.js';

const diceImg = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [dice, setDice] = useState(getRandom(diceImg.length, 1));

  return (
    <img
      src={diceImg[dice]}
      alt=""
      onClick={() => {
        setDice(0);
        setTimeout(() => setDice(getRandom(diceImg.length, 1)), 1000);
      }}
      className="clickable-picture"
    />
  );
};

export default Dice;