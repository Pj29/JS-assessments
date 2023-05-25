const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

async function updateIfExists(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  
  try {
    await axios.get(url);
    const { data } = await axios.put(url, body);
    return data;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  updateIfExists,
};

new Promise ((resolve, reject) => {
  const random = Math.floor(Math.random() * 10);
  random > 5 ? resolve(random) : reject(random);
})
  .then((response) => {
      console.log("Resolved!", response);
      return response;
  })
      .catch((response) => {
          console.log("Rejected!", response);
          return response;
      })
      .then((response) => {
          console.log("Add 10", response + 10);
      });
