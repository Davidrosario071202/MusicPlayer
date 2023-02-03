import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import { ButtonGroup } from "@material-ui/core";

class ClickButton extends Component {
  render() {
    return (
      <>
        <ButtonGroup>
          <Button
            style={{ fontSize: 30 }}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PlayCircleFilledIcon />}
            onClick={ () => (alert("The Song is playing"))}
            >
            Play
          </Button>
          <Button
            style={{ fontSize: 30 }}
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<PauseCircleFilledIcon />}
            onClick={ () => (alert("The Song is paused"))}
          >
            Pause
          </Button>
        </ButtonGroup>
      </>
    );
  }
}

export default ClickButton;
