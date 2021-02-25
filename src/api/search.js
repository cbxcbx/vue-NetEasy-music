import axios from "axios";
import { HOST } from './config';
import Url from './url.js';

export function getSearchHot() {
  let url = HOST + Url.GET_SEARCH_HOT;
  return axios.get(url)
}

export function search(keywords, offset) {
  let url = HOST + Url.SEARCH + '?keywords=' + keywords + '&offset=' + offset
  return axios.get(url)
}