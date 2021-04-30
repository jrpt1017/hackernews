import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      marginTop: 50,
      padding: 15,
    }
  })
})

const Dashboard: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NewsCard />
    </div>
  );
}

export default Dashboard;
