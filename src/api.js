export const getToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          import.meta.env.VITE_CLIENT_ID +
            ":" +
            import.meta.env.VITE_CLIENT_SECRET
        )}`,
      },
      body: "grant_type=client_credentials",
    });

    const auth = await response.json();
    localStorage.setItem("access_token", auth.access_token);
    localStorage.setItem("token_type", auth.token_type);
  } catch (err) {
    console.log(err);
  }
};

export const CATEGORIES = {
  TOP_MIXES: "toplists/playlists",
  MADE_FOR_YOU: "0JQ5DAqbMKFHOzuVTgTizF/playlists",
  RECENT_PLAYED: "0JQ5DAqbMKFQ00XGBls6ym/playlists",
  JUMP_BACK_IN: "0JQ5DAqbMKFLVaM30PMBm4/playlists",
  UNIQUELY_YOURS: "0JQ5DAqbMKFCbimwdOYlsl/playlists",
};

export const fetchCategory = async (playlistUri, offset = 0, limit = 4) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${playlistUri}?offset=${offset}&limit=${limit}`,
      {
        headers: {
          Authorization: `${localStorage.getItem(
            "token_type"
          )} ${localStorage.getItem("access_token")}`,
        },
      }
    );

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const fetchPlaylist = async (id) => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem(
          "token_type"
        )} ${localStorage.getItem("access_token")}`,
      },
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
