const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;
// const api_url = "https://cleanlites.com/wp-json/gf/v2/forms/13";
const api_url = "http://localhost:1234/api";
//  "https://cleanlites-order-form-rljgdd3tlq-uc.a.run.app/api";
// const api_url = "https://admin.cleanlites.com/api";
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
  console.log("submitting...");
  console.log(data);
  return await fetch(api_url + "/forms/submit-order-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
export const submitFormData = async (data) => {
  return await fetch(api_url + "/forms/submit-order-form", {
    method: "POST",
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    body: data,
  });
};
