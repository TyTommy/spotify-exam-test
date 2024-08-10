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

export const getTopMixes = async () => {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/categories/toplists/playlists?offset=0&limit=4",
      {
        headers: {
          Authorization: `${localStorage.getItem(
            "token_type"
          )} ${localStorage.getItem("access_token")}`,
        },
      }
    );

    const { playlists } = await response.json();
    return playlists;
  } catch (err) {
    console.log(err);
  }
};

export const getTracks = async (url) => {
  try {
    const response = await fetch(url, {
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
