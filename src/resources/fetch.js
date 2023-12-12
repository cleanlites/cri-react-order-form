const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;
// const api_url = "https://cleanlites.com/wp-json/gf/v2/forms/13";
// const api_url = "http://localhost:1234/api";
const api_url = 'https://admin.cleanlites.com/api';
export const getForm = async () => {
  return await fetch(api_url, {
    headers: {
      authorization: `Basic ${btoa(username + ':' + password).toString(
        'base64',
      )}`,
    },
  }).then((result) => result.json());
};

export const submitForm = async (data) => {
  console.log('submitting...');
  console.log(data);
  return await fetch(api_url + '/forms/submit-order-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const ping = async () => {
  return await fetch(api_url + '/ping')
    .then((res) => res.json())
    .then((res) => console.log(res));
};

export const submitFormData = async (data, captchaToken) => {
  return await fetch(api_url + '/forms/submit-order-form', {
    method: 'POST',
    headers: {
      'x-captcha-token': captchaToken,
    },
    body: data,
  });
};
