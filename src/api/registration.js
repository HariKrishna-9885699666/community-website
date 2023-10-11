import axios from '.';

export const registrationAPI = (data) => {
  return axios({
    method: "POST",
    url: `/register`,
    data,
  });
};