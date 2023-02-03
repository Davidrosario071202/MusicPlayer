import React, { useContext, useState } from "react";
import { Box, makeStyles, TextField } from "@material-ui/core";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Records from "../Data/homePage_db.json";
import { songContext, songs, userContext } from "../Data/userContext";

const useStyles = makeStyles({
  h6: {
    color: "#ffffff",
    fontSize: "16px",
    textAlign: "center",
  },
  h5: {
    color: "white",
  },
  searchField: {
    padding: "1 %",
    backgroundColor: "white",
    width: "600",
    // fontSize: 200,
  },
  root: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 90,
  },
});

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const { isplaying, setisplaying } = useContext(userContext);
  const { currentsong, setcurrentsong } = useContext(songContext);
  const { song, setsong } = useContext(songs);

  let handleChange = (e) => {
    e.preventDefault();
    let lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const filteredData = Records.filter((el) => {
    if (searchInput === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(searchInput);
    }
  });

  const handleClick = (index) => {
    
    // console.log(index);
    setcurrentsong(song[index]);
    // console.log(currentsong);
    setisplaying(true);
  };

  const classes = useStyles();
  return (
    <>
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        variant="outlined"
        fullWidth
        placeholder="Search"
        className={classes.searchField}
      />
      <br />
      <br />
      <div className="row" id="row">
        {filteredData &&
          filteredData.map((record) => {
            return (
                <div
                  className="col-md-3"
                  key={record.id}
                  style={{ color: "white" }}
                >
                  <div className="Card">
                  <Card onClick={() => handleClick(record.id)}
                    className={classes.root}
                    sx={{
                      maxWidth: 250,
                      maxHeight: 90,
                      bgcolor: "#212121",
                    }}
                  >
                    <Box>
                      <CardMedia
                        className={classes.cover}
                        component="img"
                        height="90"
                        width="90"
                        image={require("../Pictures/" + record.imagePath)}
                        // sx={{ padding: "10px", paddingBottom: "0px" }}
                      />
                    </Box>
                    <Box>
                      <CardContent className={classes.content}>
                          <Typography variant="h6" classes={{ h6: classes.h6 }}>
                            {record.name}
                          </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                  <br />
                  <br />
                  </div>
                </div>
            );
          })}
      </div>
    </>
  );
}

export default SearchBar;
