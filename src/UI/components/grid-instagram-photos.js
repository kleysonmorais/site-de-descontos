import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function GridInstagramPhotos() {
  const classes = useStyles();
  const items = [];
  for (let index = 0; index < 6; index += 1) {
    items.push(
      <GridListTile key={index.toString()}>
        <img src="https://picsum.photos/600/600" alt="title" />
      </GridListTile>
    );
  }
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {items}
      </GridList>
    </div>
  );
}
