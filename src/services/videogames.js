import { API_URL, STRAPI_URL } from "../config";

export const getGames = async () => {
  const res = await fetch(`${API_URL}/videogames?populate[platforms][fields][1]=name&populate[cover][fields][0]=url`);

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  const { data } = await res.json();
  return data.map(item => {
    const { id, attributes: { title, description, cover } } = item;

    console.log(item);

    const { url } = cover.data.attributes;

    const coverUrl = getGameCover(url);

    return {
      id,
      description,
      title,
      coverUrl
    }
  });
}

export const getGameCover = (baseurl) => {
  return `${STRAPI_URL}${baseurl}`;
};