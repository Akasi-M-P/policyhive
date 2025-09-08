import axios from "axios";

class PoliciesApi {
  constructor() {
    this._apiURL = "http://localhost:5000/api/policies";
  }

  getPolicies() {
    return axios.get(this._apiURL);
  }

  createPolicy(data) {
    return axios.post(this._apiURL, data);
  }

  updatePolicy(id, data) {
    return axios.put(`${this._apiURL}/${id}`, data);
  }

  deletePolicy(id) {
    const username = localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "";
    return axios.delete(`${this._apiURL}/${id}`, {
      data: {
        username,
      },
    });
  }
}

export default new PoliciesApi();
