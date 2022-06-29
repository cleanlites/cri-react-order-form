const username = "ck_21c34d9aa1091534eedb75f4bea60f63edca115a";
const password = "cs_e2ec277ed7c601a103ae90e18318ddf32195e4f3";
const api_url = "https://cleanlites.com/wp-json/gf/v2/forms/13";
// const api_url = "https://cleanlites.dev.local/wp-json/gf/v2/forms/11/submissions"
export const getForm = async () => {
  return await fetch(api_url, {
    headers: {
      authorization: `Basic ${btoa(username + ":" + password).toString(
        "base64",
      )}`,
    },
  }).then((result) => result.json());
};

export const submitForm = async (data) => {
  return await fetch(api_url + "/submissions", {
    method: "POST",

    headers: {
      authorization: `Basic ${btoa(username + ":" + password).toString(
        "base64",
      )}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
