import axios from '.';

export const getUserDataAPI = (userId) => {
  return axios({
    method: "GET",
    url: `/user/${userId}`,
  });
};