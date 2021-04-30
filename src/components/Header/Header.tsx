import React from 'react';
import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      position: 'absolute',
      width: '100%',
      backgroundColor: '#FFFFFF',
      height: 51,
      left: 0,
      top: 0,
      alignItems: 'center',
      boxShadow: '0px 3px 28px rgba(0, 0, 0, 0.08)'
    },
    headerText: {
      margin: 'auto',
      fontWeight: 'bold',
    },
    hacker: {
      color: '#FBC91B',
    }
  })
});

const Header: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" className={classes.root} fontWeight="fontWeightBold">
        <Typography className={classes.headerText}><span className={classes.hacker}>HACKER</span>NEWS</Typography>
      </Box>
    </>
  );
};

export default Header;