import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, CardActions, CardContent, Card, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: '0px 3px 28px rgba(0, 0, 0, 0.08)',
    borderRadius: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const NewsCard: React.FC<{}> = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader
        title="title here"
        subheader="September 14, 2016"
      />
      <CardContent>
        Content
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default NewsCard;