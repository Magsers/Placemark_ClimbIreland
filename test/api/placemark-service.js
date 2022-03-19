import axios from "axios";
import { serviceUrl } from "../fixtures.js";

export const placemarkService = {
  placemarkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.placemarkUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${  response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

  async createCrag(crag) {
    const res = await axios.post(`${this.placemarkUrl}/api/crags`, crag);
    return res.data;
  },

  async deleteAllCrags() {
    const response = await axios.delete(`${this.placemarkUrl}/api/crags`);
    return response.data;
  },

  async deleteCrag(id) {
    const response = await axios.delete(`${this.placemarkUrl}/api/crags/${id}`);
    return response;
  },

  async getAllCrags() {
    const res = await axios.get(`${this.placemarkUrl}/api/crags`);
    return res.data;
  },

  async getCrag(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/crags/${id}`);
    return res.data;
  },
  async getAllRoutes() {
    const res = await axios.get(`${this.placemarkUrl}/api/routes`);
    return res.data;
  },

  async createRoute(id, track) {
    const res = await axios.post(`${this.placemarkUrl}/api/playlists/${id}/routes`, track);
    return res.data;
  },

  async deleteAllRoutes() {
    const res = await axios.delete(`${this.placemarkUrl}/api/routes`);
    return res.data;
  },

  async getRoute(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/routes/${id}`);
    return res.data;
  },

  async deleteRoute(id) {
    const res = await axios.delete(`${this.placemarkUrl}/api/routes/${id}`);
    return res.data;
  },
};
