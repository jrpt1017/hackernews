import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, CardActions, CardContent, Card, Typography, Button, Box, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import { INewsItem } from '../../types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: '0px 3px 28px rgba(0, 0, 0, 0.08)',
    borderRadius: 12,
    overflow: 'initial',
    width: '65%',
  },
  scoreContainer: {
    backgroundColor: '#FBC91B',
    width: 100,
    padding: '25px 0px'
  },
  deetContainer: {
    width: '90%',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailText: {
    textAlign: 'initial',
    paddingLeft: 16,
    fontSize: '1.2rem',
    paddingTop: 8,
  },
  subDetailText: {
    textAlign: 'initial',
    paddingLeft: 16,
    paddingTop: 8,
  },
  commenter: {
    borderRight: '1.5px solid #34495e',
    paddingRight: 4,
  },
  comments: {
    paddingLeft: 4,
  }
});

const NewsCard: React.FC<INewsItem> = (props: INewsItem) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    // <Link to={props.url}>
    <Box display="flex" className={classes.root}>
      <Box className={`${classes.scoreContainer}`}>
        <Typography component="span" className={classes.scoreText}>
          {props.score}
        </Typography>
      </Box>
      <Box className={`${classes.deetContainer}`}>
        <Typography className={classes.detailText}>{props.title}</Typography>
        <Typography className={classes.subDetailText} variant="body2">
          <span className={classes.commenter}>by: {props.by}</span>
          <span className={classes.comments}>{props.descendants} comments</span>
        </Typography>
      </Box>
    </Box>
    // </Link>
  );
}

export default NewsCard;