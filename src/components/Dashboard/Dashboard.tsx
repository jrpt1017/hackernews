import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import NewsCard from '../NewsCard/NewsCard';
import { getNews } from '../../services';
import { INewsItem } from '../../types';
import { togglePageLoading } from '../../redux/actions/loadingAction/loadingPageAction';

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
  }, []);

  return (
    <div className={classes.root}>
      {news.map((newsItem: INewsItem) => {
        return (
          <React.Fragment key={newsItem.id}>
            <NewsCard {...newsItem} />
          </React.Fragment>
        )
      })}
    </div>
  );
}

export default Dashboard;
