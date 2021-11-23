import { createStyles, makeStyles, Theme, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import NewsCard from '../NewsCard/NewsCard';
import { getNews } from '../../services';
import { INewsItem } from '../../types';
import { togglePageLoading } from '../../redux/actions/loadingAction/loadingPageAction';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      padding: 15,
      // height: 'calc(100vh - 150px)',
      overflow: 'scroll',
      gap: 15,
      backgroundColor: '#f2f3f5'
    },
    listTag: {
      listStyleType: 'none',
    },
    listItem: {
      padding: 20,
      width: '65%',
    },
    linkTo: {
      display: 'contents',
      textDecoration: 'none',
      textDecorationColor: 'none',
    },
  })
})

const Dashboard: React.FC<{}> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [news, setNews] = React.useState<INewsItem[]>([]);

  React.useEffect(() => {
    const setData = async () => {
      dispatch(togglePageLoading(true));
      const items = await getNews();
      setNews(items)
      dispatch(togglePageLoading(false));
    };
    setData();
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" className={classes.root}>
      {news.map((newsItem: INewsItem) => {
        console.log(newsItem.url);
        return (
          <a href={newsItem.url} key={newsItem.id} className={classes.linkTo} target="_blank" rel="noreferrer">
            <NewsCard {...newsItem} />
          </a>
        )
      })}
    </Box>
  );
}

export default Dashboard;
