const axios = require("axios"); // Import Axios if you're working with Node.js

const baseURL = "https://jsonplaceholder.typicode.com";

async function fetchPostsByUserId(userId) {
  try {
    const response = await axios.get(`${baseURL}/posts/?userId=${userId}`);

    console.log("Post:", response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const createPost = async (title, text, userId) => {
  const response = await axios(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body: text,
      userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (response.status === 201) console.log("post created succesfully");
  else console.log("Failed to create the post");
};

// createPost("post", "my first post", 10);
const userId = 10;
fetchPostsByUserId(userId);
