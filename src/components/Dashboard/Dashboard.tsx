import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { getNews } from '../../services';
import { INews } from '../types';

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
  const [news, setNews] = React.useState<number[]>([]);

  React.useEffect(() => {
    const setData = async () => {
      const items = await getNews();
      setNews(items);
    };
    setData();
  }, [])

  return (
    <div className={classes.root}>
      <NewsCard />
    </div>
  );
}

export default Dashboard;
