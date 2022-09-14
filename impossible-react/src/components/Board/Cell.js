import React from 'react';
import style from './Board.module.scss';
import { Colors, BoardNumberByLetter } from '../../types';
import classNames from 'classnames';

export default function Cell(props) {
  return (
    <li
      onClick={() => props.cellClicked(BoardNumberByLetter[props.x], props.y)}
      id={`cell-${props.x}-${props.y}`}
      className={classNames(style.cell, {
        [style.cellWhite]: props.color === Colors.WHITE,
        [style.cellBlack]: props.color === Colors.BLACK,
        [style.availableCell]:
          props.isAvailableForMove && !props.isHavingFigure,
        [style.cellSelected]: props.isSelected,
      })}
    >
      <div
        className={classNames(style.cellCircle, {
          [style.cellCircleShow]:
            props.isAvailableForMove && !props.isHavingFigure,
        })}
      ></div>
    </li>
  );
}
