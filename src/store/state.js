import { playMode } from 'common/js/player/config'

const state = {
  isLogin: false,
  singer: {},
  // 播放
  playing: false,
  // 全屏
  fullScreen: false,
  // 播放模式
  mode: playMode.sequence,
  // 顺序播放列表
  playlist: [],
  // 其他排序列表
  sequenceList: [],
  // 当前播放索引
  currentIndex: -1
}

export default state