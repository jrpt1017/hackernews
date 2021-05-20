import { createStyles, makeStyles, Theme, Box } from '@material-ui/core';
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
      height: 'calc(100vh - 150px)',
      overflow: 'scroll',
      gap: 15,
    },
    listTag: {
      listStyleType: 'none',
    },
    listItem: {
      // lineHeight: theme.typography.pxToRem(25),
      // width: '65%',
      // height: 150,
      padding: 20,
      width: '65%',
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
      console.log(items);
      setNews(items)
      dispatch(togglePageLoading(false));
    };
    setData();
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" className={classes.root}>
      {news.map((newsItem: INewsItem) => {
        return (
          <React.Fragment key={newsItem.id}>
            <NewsCard {...newsItem} />
          </React.Fragment>
        )
      })}
    </Box>
  );
}

export default Dashboard;
