'use strict';
import axios from 'axios';

const baseUrl = require('../endpoint');

export default {
  searchImages(searchString, page) {
    return axios.get(`${baseUrl}/images?q=${searchString}&page=${page}`)
  },
  getImageDetails(id) {
    return axios.get(`${baseUrl}/images/${id}/details`)
  }
};