export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.tokenJWT) {
   return { Authorization: 'Bearer ' + user.tokenJWT }; // for Spring Boot back-end
    //return { 'x-access-token': user.tokenJWT };       // for Node.js Express back-end
  } else {
    return {};
  }
}
