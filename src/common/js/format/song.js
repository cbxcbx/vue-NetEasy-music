export class Song {
  constructor({ id, mid, singer, name, album, duration, image, url, aliaName }) {
    this.id = id;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.aliaName = aliaName;
    this.image = image;
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