import axios from 'axios';

const API_URL = 'http://localhost:8080/';

class ClienteService {
  getAllClients() {
    return axios.get(API_URL + 'client/all');
  }

}

export default new ClienteService();
