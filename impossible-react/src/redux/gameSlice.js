import { createSlice } from '@reduxjs/toolkit';
import { Colors } from '../types';
import { initialFigures } from '../components/Board/initialPos';

const initialState = {
  color: Colors.WHITE,
  figures: initialFigures,
  gameWon: null,
  isGameStarted: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    changeFigurePosition: (state, action) => {
      state.figures[action.payload.figure.id].x = action.payload.x;
      state.figures[action.payload.figure.id].y = action.payload.y;
    },
    removeFigure: (state, action) => {
      delete state.figures[action.payload.id];
    },
    setGameWon: (state, action) => {
      state.gameWon = action.payload;
    },
    resetGame: (state) => {
      state.gameWon = initialState.gameWon;
      state.figures = initialState.figures;
      state.isGameStarted = false;
    },
    setGameStarted: (state, action) => {
      state.isGameStarted = action.payload;
    },
  },
});

export const {
  setColor,
  changeFigurePosition,
  removeFigure,
  setGameWon,
  resetGame,
  setGameStarted,
} = gameSlice.actions;

export const selectFigures = (state) => state.game.figures;
export const selectColor = (state) => state.game.color;
export const selectGameWon = (state) => state.game.gameWon;
export const selectIsGameStarted = (state) => state.game.isGameStarted;

export default gameSlice.reducer;
