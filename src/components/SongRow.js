import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./SongRow.css";

function SongRow({ track }) {
  const [{}, dispatch] = useDataLayerValue();

  const setSong = () => {
    dispatch({
      type: "SET_SONG",
      song: track,
    });
  };

  return (
    <div className="songRow" onClick={setSong}>
      <img
        className="songRow__album"
        src={track?.album?.images[0]?.url}
        alt=""
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(",")}
          {" " + track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
