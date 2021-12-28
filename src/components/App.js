import { useEffect, useState } from "react";
import { getTokenFromUrl } from "../spotify";
import "./App.css";
import Login from "./Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "../DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, playlists, discover_weekly, tracks, song }, dispatch] =
    useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (token) {
      spotify
        .getPlaylist(playlists?.items[0]?.id)
        .then((playlist) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: playlist,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [playlists]);

  useEffect(() => {
    if (token) {
      spotify.getPlaylistTracks(discover_weekly?.id).then((tracks) => {
        dispatch({
          type: "SET_TRACKS",
          tracks: tracks,
        });
      });
    }
  }, [discover_weekly]);

  useEffect(() => {
    if (token && song === null) {
      spotify
        .getMyCurrentPlayingTrack()
        .then((res) => {
          if (res.item) {
            dispatch({
              type: "SET_SONG",
              song: res.item,
            });
          } else {
            dispatch({
              type: "SET_SONG",
              song: tracks?.items[0].track,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [tracks]);

  return (
    <div className="App">
      {token ? (
        <>
          {/* Main Screen after Login */}
          <Player spotify={spotify} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
