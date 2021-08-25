import axios from 'axios';

const baseUrl = '127.0.0.1/';

// ON SIGN UP
const newUser = function (user) {
  console.log('helper user new', user)
  let config = {
    method: 'post',
    url:`/newUser`,
    data: user
  }
  console.log('here ia m', config.data)
  return axios(config)
    .then((data) => {
      console.log('hi!', data)
    })
    .catch((err) => {
      console.log('newusr error', err)
    });
}

// ON LOGIN
const getBoards = function (user) {
  let config = {
    method: 'get',
    url: `${baseUrl, user.username}`
  }
  return axios(config)
  .then((res) => {
    console.log('hi!', res.data)
  })
  .catch((err) => {
    console.log(err)
  });
}

export default { newUser, getBoards };