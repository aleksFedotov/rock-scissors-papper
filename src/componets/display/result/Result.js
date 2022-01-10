import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../../store/game';
import CSSTransition from 'react-transition-group/CSSTransition';

import getHouseChoice from '../../../utils/functions/getHouseChoice';
import getResult from '../../../utils/functions/getResult';

import Chip from '../../ui/choice/Chip';
import Ripple from '../../ui/ripple/Ripple';

import styles from './Result.module.css';

const Result = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { userChoice, houseChoice, result, mode } = game;
  const [tempChip, setTempChip] = useState('');

  useEffect(() => {
    // random picker animation
    // number of times we pick a temperory random chip
    const times = 30;

    // random picker will pick every 75ms a random chip

    // after 75ms * times we clear interval and choose final chip
    setTimeout(() => {
      const interval = setInterval(() => {
        setTempChip(getHouseChoice(mode));
      }, 75);
      setTimeout(() => {
        clearInterval(interval);

        // get finall pick for house
        const housePick = getHouseChoice(mode);
        dispatch(gameActions.setHouseChoice(housePick));

        setTimeout(() => {}, 75);
      }, times * 75);
    }, 1000);
  }, [dispatch, mode, setTempChip]);

  // get result when both choices are made

  useEffect(() => {
    if (!houseChoice) return;

    const result = getResult(userChoice, houseChoice);
    dispatch(gameActions.setResult(result));

    if (result === 'You win') {
      dispatch(gameActions.updateScore(1));
    } else if (result === 'You lost') {
      dispatch(gameActions.updateScore(-1));
    }
  }, [houseChoice, userChoice, dispatch]);

  const resetGame = () => {
    dispatch(gameActions.resetGame());
  };

  return (
    <div className={styles.result}>
      {/* User choice */}
      <CSSTransition
        in={userChoice !== ''}
        timeout={1000}
        classNames={styles.userChoice}
      >
        <div className={`${styles.choice} ${styles.choice_user}`}>
          <p className={styles.choice__header}>You picked</p>
          <div className={styles.choice__chip_box}>
            <Chip type={userChoice} result={true} />
            {result === 'You win' && <Ripple />}
          </div>
        </div>
      </CSSTransition>

      {/* Result */}
      {result && (
        <div className={styles.status}>
          <p>{result}</p>
          <button onClick={resetGame}>Play again</button>
        </div>
      )}
      {/* House choice */}
      <div className={`${styles.choice}  ${styles.choice_house}`}>
        <p className={styles.choice__header}>The house picked</p>
        {result ? (
          <div className={styles.choice__chip_box}>
            <Chip type={houseChoice} result={true} />
            {result === 'You lost' && <Ripple />}
          </div>
        ) : tempChip ? (
          <Chip type={tempChip} result={true} />
        ) : (
          <div className={styles.placeholder}></div>
        )}
      </div>
    </div>
  );
};

export default Result;
