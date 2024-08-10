export const setCurrentMusicUrl = (currentMusicUrl) => {
  return {
    type: "SET_CURRENT_MUSIC",
    payload: currentMusicUrl,
  };
};
