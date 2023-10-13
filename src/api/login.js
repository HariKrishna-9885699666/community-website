import axios from '.';

export const loginAPI = (data) => {
  console.log('ssssss', data);
  return axios({
    method: "POST",
    url: `/login`,
    data,
  });
};