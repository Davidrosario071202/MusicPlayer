import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles({
  root: {
    width: 180,
    color: "#ffffff",
  },
});

export default function ContinuousSlider({ volume, setVolume, audioElement }) {
  const classes = useStyles();
  const [value, setValue] = useState(50);
  const clickRef = useRef();

  const handleVolumeChange = (e, newvalue) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width;

    setValue(newvalue);
    audioElement.current.volume = value;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider ref={clickRef} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}
