export const initialState = {
  user: null,
  playing: false,
  item: null,
  playlists: [],
  token: null,
  discover_weekly: null,
  tracks: null,
  song: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
      };

    case "SET_SONG":
      return {
        ...state,
        song: action.song,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    default:
      return state;
  }
};

export default reducer;
