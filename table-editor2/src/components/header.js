import React from 'react';
import { ThemeContext } from '../theme';

export default function Header() {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return theme;
      }}
    </ThemeContext.Consumer>
  );
}
