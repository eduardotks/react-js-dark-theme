import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {
  login(login, senha) {
    return axios
      .post(API_URL + "login", {
        login,
        senha
      })
      .then(response => {
        if (response.data.tokenJWT) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(login, email, senha) {
    return axios.post(API_URL + "signup", {
      login,
      email,
      senha
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
