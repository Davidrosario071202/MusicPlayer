import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import AppTopBar from "../components/AppTopBar";
import Player from "../components/Player";
import SideBar from "../components/sideBar";
import { songs } from "../Data/userContext";
import { userContext, songContext } from "../Data/userContext";

export default function MainLayout() {
  const { isplaying, setisplaying } = useContext(userContext);
  const { currentsong, setcurrentsong } = useContext(songContext);
  const { song, setsong } = useContext(songs);

  return (
    <>
      <div className="app-top-bar">
        <AppTopBar />
      </div>
      <div className="side-nav-bar">
        <SideBar />
      </div>
      <div className="content-container">
      <songContext.Provider value={{ currentsong, setcurrentsong }} >
        <Outlet />
        </songContext.Provider>
      </div>
      <div className="music-control-bar">
        <userContext.Provider value={{ isplaying, setisplaying }}>
          <songContext.Provider value={{ currentsong, setcurrentsong }}>
            <songs.Provider value={{ song, setsong }}>
              <Player />
            </songs.Provider>
          </songContext.Provider>
        </userContext.Provider>
      </div>
    </>
  );
}
