export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const postsInfo = await response.json();
    return postsInfo.data.posts;
  } catch (error) {
    console.error(error);
    console.log("Can't fetch posts");
  }
};
