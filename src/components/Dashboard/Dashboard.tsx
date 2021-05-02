import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { getNews, getNewsByID } from '../../services';
import { INewsItem } from '../types';

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
  const [news, setNews] = React.useState<INewsItem[]>([]);

  React.useEffect(() => {
    const setData = async () => {
      const items = await getNews();
      setNews(items)
    };
    setData();
  }, [])

  return (
    <div className={classes.root}>
      {news.map((newsItem: INewsItem) => {
        return (<NewsCard {...newsItem} />)
      })}
    </div>
  );
}

export default Dashboard;
