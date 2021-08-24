import axios from 'axios';

const baseUrl = 'localhost/';

const getBoards = function (user) {
  let config = {
    method: 'get',
    url: `localhost/${user}`,

    //do i need authorization?? prob not
  }
  return axios(config);
}

// const axiosCalls = {
//   getBoards: getBoards
// }
export default getBoards;
//module.exports = {getBoards}