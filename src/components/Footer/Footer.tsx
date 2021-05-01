import React from 'react';
import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      backgroundColor: '#FBC91B',
      height: 99,
      alignItems: 'center',
      position: 'sticky',
      width: '100%',
      bottom: 0,
    },
    footerText: {
      margin: 'auto',
      fontWeight: 'bold'
    }
  })
});

const Footer: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" className={classes.root}>
        <Typography className={classes.footerText}>HACKERNEWS.</Typography>
      </Box>
    </>
  );
};

export default Footer;