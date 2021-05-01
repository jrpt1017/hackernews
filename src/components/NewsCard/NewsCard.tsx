import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, CardActions, CardContent, Card, Typography, Button } from '@material-ui/core';
import { getNewsByID } from '../../services';
import { INewsItem } from '../types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: '0px 3px 28px rgba(0, 0, 0, 0.08)',
    borderRadius: 12,
  },
  title: {
    fontSize: 50,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

interface INewsCard {
  id: number,
}

const NewsCard: React.FC<INewsCard> = (props: INewsCard) => {
  const classes = useStyles();
  const [newsData, setNewsData] = React.useState<INewsItem>();
  const dummyText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore iure id quo! Necessitatibus cumque, 
  voluptatem perspiciatis accusamus sit vel reiciendis sapiente perferendis facilis, laboriosam, accusantium aliquid molestiae suscipit deserunt!`;

  React.useEffect(() => {
    const getData = async (id: number) => {
      const newsItem = await getNewsByID(id);
      setNewsData(newsItem)
    };
    getData(props.id);
  }, [props.id]);


  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title={newsData?.title}
      />
      <CardContent>
        <Typography>{newsData?.text || dummyText}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default NewsCard;