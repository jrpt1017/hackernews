import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { getNews, getNewsByID } from '../../services';

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
      setNews(items.slice(0, 6));
    };
    setData();
  }, [])

  const getData = async (id: number) => {
    const newsItem = await getNewsByID(id);
    return newsItem;
  };

  return (
    <div className={classes.root}>
      {news.map((newsItem: number) => {
        console.log(newsItem);
        return (<NewsCard id={newsItem} />)
      })}
    </div>
  );
}

export default Dashboard;
