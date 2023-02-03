import React, { Component } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { withStyles } from "@material-ui/styles";

const useStyles = theme => ({
    dropdownStyles: {
        border: "1px solid white",
        backgroundColor: 'white',
    },
})

const handleChange = (event) => {
    this.setState({ appTheme :event.target.value });
  };

class DropDownMenu extends Component {

    state = {
        appTheme: 0,
    };
    render() {
      const { classes } = this.props;
    return (
      <Box 
        sx={{
             width: "90px" 
       }}>
        <FormControl fullWidth>
          <Select
            id="select"
            value={this.state.appTheme}
            label="Theme"
            variant="filled"
            onChange={handleChange}
            MenuProps={{classes: {paper : classes.dropdownStyles }}}
          >
            <MenuItem value={1}>Default</MenuItem>
            <MenuItem value={0}>Light</MenuItem>
            <MenuItem value={1}>Dark</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }
}

export default  withStyles(useStyles) (DropDownMenu);
