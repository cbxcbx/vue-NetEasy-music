import { getSongUrl, getSongDetail } from 'api/song';
import { ERR_OK } from "api/config";

export class Song {
  constructor({ id, mid, singer, name, album, duration, image, url, aliaName }) {
    this.id = id;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
    this.aliaName = aliaName;
  }
}

function singerName(arr) {
  let name = [];
  name = arr.map((item) => {
    return item.name
  })

  return name.join('/')
}

export function createSong(music) {
  return new Song({
    id: music.id,
    singer: singerName(music.ar),
    aliaName: music.alia.join('-'),
    name: music.name,
    album: music.al.name,
    image: music.al.picUrl
  })
}

export function processSongsUrl(songs) {
  if (!songs.length) {
    return Promise.resolve(songs);
  }
  // 获取歌曲id数组
  let ids = [];
  songs.map(song => {
    ids.push(song.id);
  })

  addSongUrl(ids, songs);
  addSongDuration(ids, songs);
  return songs
}

function addSongUrl(ids, songs) {
  return getSongUrl(ids.join(',')).then((res) => {
    const purlMap = {};

    if (res.data.code === ERR_OK) {
      let response = res.data.data;
      if (response) {
        response.forEach(item => {
          if (item.url) {
            purlMap[item.id] = item.url;
          }
        });
      }
    }
    songs = songs.filter((song) => {
      const purl = purlMap[song.id];
      if (purl) {
        song.url = purl
        return true
      }
      return false
    })
    return songs
  })
}

function addSongDuration(ids, songs) {
  return getSongDetail(ids.join(',')).then((res) => {
    const durationMap = {};

    if (res.data.code === ERR_OK) {
      let response = res.data.songs;
      if (response) {
        response.forEach(item => {
          if (item.dt) {
            durationMap[item.id] = Math.round(item.dt / 1000);
          }
        });
      }
    }
    songs = songs.filter((song) => {
      const duration = durationMap[song.id];
      if (duration) {
        song.duration = duration;
        return true
      }
      return false
    })
    return songs
  })
}