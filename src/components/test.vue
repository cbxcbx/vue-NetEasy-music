<template>
  <div class="scroll-wrapper" ref="scroll">
    <div class="scroll-content">
      <div class="scroll-item" v-for="(item, index) in emojis" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      emojis: [
        "😀 😁 😂 🤣 😃",
        "😄 😅 😆 😉 😊",
        "😫 😴 😌 😛 😜",
        "👆🏻 😒 😓 😔 👇🏻",
        "😑 😶 🙄 😏 😣",
        "😞 😟 😤 😢 😭",
        "🤑 😲 🙄 🙁 😖",
        "👍 👎 👊 ✊ 🤛",
        "🙄 ✋ 🤚 🖐 🖖",
        "👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼",
        "☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽",
        "🌖 🌗 🌘 🌑 🌒",
        "💫 💥 💢 💦 💧",
        "🐠 🐟 🐬 🐳 🐋",
        "😬 😐 😕 😯 😶",
        "😇 😏 😑 😓 😵",
        "🐥 🐣 🐔 🐛 🐤",
        "💪 ✨ 🔔 ✊ ✋",
        "👇 👊 👍 👈 👆",
        "💛 👐 👎 👌 💘",
        "👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼",
        "☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽",
        "🌖 🌗 🌘 🌑 🌒",
        "💫 💥 💢 💦 💧",
        "🐠 🐟 🐬 🐳 🐋",
        "😬 😐 😕 😯 😶",
        "😇 😏 😑 😓 😵",
        "🐥 🐣 🐔 🐛 🐤",
        "💪 ✨ 🔔 ✊ ✋",
        "👇 👊 👍 👈 👆",
        "💛 👐 👎 👌 💘"
      ]
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        probeType: 3,
        click: true,
        scrollX: true
      });
      this.bs.on("scrollStart", () => {
        console.log("scrollStart-");
      });
      this.bs.on("scroll", ({ y }) => {
        console.log("scrolling-");
      });
      this.bs.on("scrollEnd", pos => {
        console.log(pos);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-wrapper {
  position: relative;
  width: 90%;
  margin: 80px auto;
  white-space: nowrap;
  border: 3px solid #42b983;
  border-radius: 5px;
  overflow: hidden;
  .scroll-content {
    display: inline-block;
  }
  .scroll-item {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    text-align: center;
    padding: 0 10px;
  }
}
</style>