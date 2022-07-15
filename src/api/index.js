export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt";

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

    console.log("options", options);
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

export const loginOrRegister = async (path, username, password) => {
  const response = await apiCall(`users/${path}`, "POST", null, {
    user: { username, password },
  });

  return response.data.token;
};
