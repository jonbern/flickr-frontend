'use strict';
import axios from 'axios';

const baseUrl = process.env.API_BASE_URL || 'http://localhost/api';

export default {
  searchImages(searchString, page) {
    return axios.get(`${baseUrl}/images?search=${searchString}&page=${page}`)
  },
  getImageDetails(id) {
    return axios.get(`${baseUrl}/images/${id}/details`)
  }
};