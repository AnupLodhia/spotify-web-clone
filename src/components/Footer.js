import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from "@mui/material";
import { useDataLayerValue } from "../DataLayer";

function Footer() {
  const [{ song }] = useDataLayerValue();

  // console.log(song);
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={
            song
              ? song?.album.images[0].url
              : "https://www.pagalworld.pw/GpE34Kg9Gq/12075/thumb-arijit-singh-mega-hits-mp3-songs-300.jpg"
          }
          alt=""
        />
        <div className="footer__songInfo">
          <h4>{song?.name ? song?.name : "No Current Playback..."}</h4>
          {song && (
            <p>
              {" "}
              {song?.artists?.map((artist) => artist.name).join(",")}
              {" " + song?.album?.name}
            </p>
          )}
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
