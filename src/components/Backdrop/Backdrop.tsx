import React from 'react';
import { Backdrop as MuiBackdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { IAppState } from '../../redux/store';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const Backdrop = () => {
  const classes = useStyles();
  const isLoading = useSelector((state: IAppState) => { return state.loadingPageState.isPageLoading; });

  return (
    <>
      <MuiBackdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </MuiBackdrop>
    </>
  );
}

export default Backdrop;
