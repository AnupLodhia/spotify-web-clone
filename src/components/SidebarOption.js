import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./SidebarOption.css";

function SidebarOption({ Icon, playlist, title }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const getPlaylist = () => {
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: playlist,
    });
  };

  return (
    <div
      className="sidebarOption"
      onClick={playlist ? getPlaylist : undefined}
      style={{ color: discover_weekly?.id === playlist?.id && "white" }}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
