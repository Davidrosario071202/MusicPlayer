import React, { useContext, useState } from "react";
import "../App.css";
import "../styles.css";
import Records from "../Data/homePage_db.json";
import Title from "../Data/Title.json";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  CardContent,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import { songContext, songs, userContext } from "../Data/userContext";
import { SongData } from "../Data/Songs";

const useStyles = makeStyles({
  h6: {
    color: "#ffffff",
    fontSize: "16px",
    textAlign: "center",
  },
  h5: {
    color: "white",
  },
});

function HomePage() {
  const { isplaying, setisplaying } = useContext(userContext);
  const { currentsong, setcurrentsong } = useContext(songContext);
  // const [isplaying, setisplaying] = useState(false);
  // const [currentsong, setcurrentsong] = useState(SongData[0]);
  const { song, setsong } = useContext(songs);

  const handleClick = (index) => {
    console.log(index);
    setcurrentsong(song[index]);
    // console.log(currentsong);
    setisplaying(true);
  };

  const classes = useStyles();
  return (
    <>
      <div className="inner-container">
        {Title &&
          Title.map((element) => {
            return (
              <div key={element.id}>
                <div className="row" id="row">
                  <div className="col-md-10">
                    <Typography variant="h5" classes={{ h5: classes.h5 }}>
                      {element.title}
                    </Typography>
                  </div>
                </div>
                <div className="row" id="row">
                  {Records &&
                    Records.filter(
                      (record) => record.title === element.title
                    ).map((record) => {
                      return (
                        <div
                          className="col-md-3"
                          key={record.id}
                          onClick={() => handleClick(record.id)}
                        >
                          <div className="Card">
                            <Card
                              sx={{
                                maxWidth: 200,
                                maxHeight: 250,
                                bgcolor: "#212121",
                              }}
                            >
                              <CardMedia
                                component="img"
                                height="170"
                                image={require("../Pictures/" +
                                  record.imagePath)}
                                sx={{ padding: "10px", paddingBottom: "0px" }}
                              />
                              <CardContent>
                                <Typography
                                  variant="h6"
                                  classes={{ h6: classes.h6 }}
                                >
                                  {record.name}
                                </Typography>
                              </CardContent>
                            </Card>
                            <br />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}

        {/* </div> */}
      </div>

      {/* <div className="music-control-bar">
          <Player />
        </div> */}
    </>
  );
}

export default withStyles(useStyles)(HomePage);
