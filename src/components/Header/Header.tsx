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
    footerText: {
      margin: 'auto',
    }
  })
});

const Header: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" className={classes.root}>
        <Typography className={classes.footerText}>Header Hackernews</Typography>
      </Box>
    </>
  );
};

export default Header;