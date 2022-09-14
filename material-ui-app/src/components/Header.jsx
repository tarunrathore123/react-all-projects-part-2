import React from 'react';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      Header
      <div className={classes.toolbarMargin}></div>
    </div>
  );
};

export default Header;
