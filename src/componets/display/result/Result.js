import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../../store/game';
import getHouseChoice from '../../../utils/functions/getHouseChoice';
import getResult from '../../../utils/functions/getResult';

import Chip from '../../ui/choice/Chip';
import Ripple from '../../ui/ripple/Ripple';

import styles from './Result.module.css';

const Result = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { userChoice, houseChoice, result, mode } = game;

  useEffect(() => {
    const housePick = getHouseChoice(mode);

    dispatch(gameActions.setHouseChoice(housePick));
    return () => {};
  }, [dispatch, mode]);

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
      <div className={`${styles.choice} ${styles.choice_user}`}>
        <p className={styles.choice__header}>You picked</p>
        <div className={styles.choice__chip_box}>
          <Chip type={userChoice} result={true} />
          {result === 'You win' && <Ripple />}
        </div>
      </div>
      {result && (
        <div className={styles.status}>
          <p>{result}</p>
          <button onClick={resetGame}>Play again</button>
        </div>
      )}

      <div className={`${styles.choice}  ${styles.choice_house}`}>
        <p className={styles.choice__header}>The house picked</p>
        {result ? (
          <div className={styles.choice__chip_box}>
            <Chip type={houseChoice} result={true} />
            {result === 'You lost' && <Ripple />}
          </div>
        ) : (
          <div className={styles.placeholder}></div>
        )}
      </div>
    </div>
  );
};

export default Result;
