import axios from "axios"
import { HOST } from './config'
import Url from './url.js'

export function getBanner() {
  let url = HOST + Url.GET_BANNER;
  return axios.get(url)
}

export function getPersonalized(limit) {
  let url = limit ? HOST + Url.GET_PERSONALIZED + '?limit=' + limit : HOST + Url.GET_PERSONALIZED;
  return axios.get(url)
}

export function getNewestAlbum() {
  let url = HOST + Url.GET_NEWEST_ALBUM;
  return axios.get(url)
}