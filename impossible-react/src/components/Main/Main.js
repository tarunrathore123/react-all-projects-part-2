import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {
  resetGame,
  selectColor,
  selectIsGameStarted,
  setColor,
} from '../../redux/gameSlice';
import RadioButton from '../RadioButton/RadioButton';
import styles from './Main.module.scss';

export default function Main() {
  const navigate = useNavigate();
  const color = useSelector(selectColor);
  const isGameStarted = useSelector(selectIsGameStarted);
  const dispatch = useDispatch();

  const radioChanged = (id) => {
    dispatch(setColor(id));
  };
  const startNewGame = () => {
    dispatch(resetGame());
    navigate('/game');
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}></div>
      <h2>Choose Side</h2>
      <form>
        <RadioButton
          value="White"
          handleChange={radioChanged}
          name="radio"
          isChecked={color === 'white'}
        />
        <RadioButton
          value="black"
          handleChange={radioChanged}
          name="radio"
          isChecked={color === 'black'}
        />
      </form>
      {isGameStarted && (
        <Link to="game" className={styles.button}>
          Continue
        </Link>
      )}
      <a href="#" onClick={startNewGame} className={styles.button}>
        Start new game
      </a>
    </div>
  );
}
