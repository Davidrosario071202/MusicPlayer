import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";


export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">
        <AccountCircleRoundedIcon 
                    sx={{
                      color: 'white',
                      fontSize: 50,
                    }}
                  />
        </InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={age}
          label="accOption"
          onChange={handleChange}
        >
          <MenuItem value={1}>Profile</MenuItem>
          <MenuItem value={2}>Log out</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
