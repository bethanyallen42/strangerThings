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

export const apiCall = async (path, method, token, body) => {
  try {
    const options = {
      method: method ? method.toUpperCase() : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(`${BASE_URL}/${path}`, options);
    const data = await response.json();

    if (data.error) {
      throw data.error;
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};
