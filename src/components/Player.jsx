import React, { useRef, useState, useEffect, useContext } from "react";
import "../App.css";
import MusicControlBar from "./MusicControlBar";
import { SongData } from "../Data/Songs";
import { songContext, songs, userContext } from "../Data/userContext";

const Player = () => {
  const { song, setsong } = useContext(songs);
  const [value, setValue] = useState(0);
  const [loopActive, setloopActive] = useState(false);
  const { currentsong, setcurrentsong } = useContext(songContext);
  const { isplaying, setisplaying } = useContext(userContext);
  
  useEffect(() => {
    if (isplaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isplaying, currentsong]);

  const onplaying = () => {
    const duration = audioElement.current.duration;
    const cur_time = audioElement.current.currentTime;

    setcurrentsong({
      ...currentsong,
      progress: (cur_time / duration) * 100,
      length: duration,
    });
    setValue(`${currentsong.progress}`);
  };
  const audioElement = useRef();

  return (
    <>
      <audio
        src={require("../Songs/" + currentsong.musicName)}
        ref={audioElement}
        onTimeUpdate={onplaying}
      />
      <MusicControlBar
        song={song}
        setSong={setsong}
        isPlaying={isplaying}
        setisplaying={setisplaying}
        audioElement={audioElement}
        currentSong={currentsong}
        setcurrentSong={setcurrentsong}
        loopActive={loopActive}
        value={value}
      />
    </>
  );
};

export default Player;
