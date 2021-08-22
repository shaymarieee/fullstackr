import firebase from '../config/firebase-config'

const socialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res)=>{
    return res.user;
    })
    .catch((er) =>{
      retun err;
    })
}

export default socialMediaAuth;