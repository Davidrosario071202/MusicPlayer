import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { SongData } from '../Data/Songs';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 110,
    width: "100%",
    backgroundColor: '#000000',
    top: 0,
    bottom: 0,

  },
  cover: {
    marginLeft: '8%',
    width: '20%',
    height: 110,
  },
  h6: {
    color: '#ffffff',
    fontSize: '17px'
  },
  content: {
    marginLeft: '5%',
    width: '100%',
    
  }
}));

const MediaControlCard2 = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Link to='/nowplaying' style={{textDecoration:'none'}}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="../Pictures/ranjithame.jpeg"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            {/* <Typography component="h6" variant="h6" className={classes.h6}>
              
            </Typography> */}
            <Typography variant="subtitle1" color="textSecondary" className={classes.h6} >
            Ranjithame - from ("varisu")
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}

export default MediaControlCard2;