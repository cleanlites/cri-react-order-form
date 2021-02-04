const fetch = require("node-fetch");
const fs = require("fs");

const username = "ck_21c34d9aa1091534eedb75f4bea60f63edca115a";
const password = "cs_e2ec277ed7c601a103ae90e18318ddf32195e4f3";
const api_url = "https://cleanlites.com/wp-json/gf/v2/forms/13";
// const api_url = "https://cleanlites.dev.local/wp-json/gf/v2/forms/11/submissions"
const getForm = async () => {
  return await fetch(api_url, {
    headers: {
      authorization: `Basic ${Buffer.from(username + ":" + password).toString(
        "base64"
      )}`,
    },
  });
};

getForm()
  .then((res) => res.buffer())
  .then((result) => {
    const path = `../src/resources/form.json`;
    fs.writeFile(path, result, (err) => {
      if (err) console.log(err);
    });
  });
