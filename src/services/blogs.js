import { API_URL, STRAPI_URL } from "../config";

"?populate[imagen][fields][0]=url"

export const getBlogs = async () => {
  const res = await fetch(`${API_URL}/blogs?populate[imagen][fields][0]=url`);

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  const { data } = await res.json();

  return data.map(item => {
    const { id, attributes: { title, publishedAt, imagen } } = item;

    const { url } = imagen.data[0].attributes;

    const image = getBlogImage(url);

    return {
      id,
      title,
      publishedAt,
      image
    }
  });
}

export const getBlog = async (idPost) => {
  const res = await fetch(`${API_URL}/blogs/${idPost}?populate[imagen][fields][0]=url`);

  if (res.status === 404) return null;

  const { data } = await res.json();

  const { id, attributes: { title, publishedAt, imagen } } = data;

  const { url } = imagen.data[0].attributes;

  const image = getBlogImage(url);

  return {
    id,
    title,
    publishedAt,
    image
  }
}

export const getBlogImage = (baseurl) => {
  return `${STRAPI_URL}${baseurl}`;
};