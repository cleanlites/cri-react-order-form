const username = "ck_21c34d9aa1091534eedb75f4bea60f63edca115a";
const password = "cs_e2ec277ed7c601a103ae90e18318ddf32195e4f3";

export const getForm = async () => {
  return await fetch("https://cleanlites.com/wp-json/gf/v2/forms/13", {
    headers: {
      authorization: `Basic ${btoa(username + ":" + password).toString(
        "base64"
      )}`,
    },
  }).then((result) => result.json());
};
