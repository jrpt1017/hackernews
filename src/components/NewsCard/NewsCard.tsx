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

const NewsCard: React.FC<INewsItem> = (props: INewsItem) => {
  const classes = useStyles();
  const dummyText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore iure id quo! Necessitatibus cumque, 
  voluptatem perspiciatis accusamus sit vel reiciendis sapiente perferendis facilis, laboriosam, accusantium aliquid molestiae suscipit deserunt!`;

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title={props?.title}
      />
      <CardContent>
        <Typography>{props?.text || dummyText}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default NewsCard;