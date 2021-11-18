<template lang="pug">
  .mb-dungeon-popup2
    .mb-dungeon-popup-background2(@click="close")

    .mb-dungeon-popup-inner2
      .video
        video(autoplay loop)
          source(type="video/mp4" :src="get_video()")
        .button-popup
          button(@click="open") Open Dungeon
</template>

<script>

import {mapGetters, mapMutations} from 'vuex';

const host = process.env.VUE_APP_ASSETS_PATH

export default {
  name: "DungeonPopup",

  computed: {
    ...mapGetters(['get_current_dungeon'])
  },

  methods: {
    ...mapMutations(['pve_hide_dungeon_popup', 'pve_show_dungeon_popup']),
    get_video() { return `${host}/locations/${this.get_current_dungeon}.mp4` },
    open() {
      this.pve_show_dungeon_popup()
    },
    close() {
      this.pve_hide_dungeon_popup()
    },

  }
}
</script>

<style lang="sass">
.mb-dungeon-popup2
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center
  overflow: hidden
  position: fixed
  z-index: 30

  width: 100%
  height: 100%

  .mb-dungeon-popup-background2
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    background-color: black
    opacity: 0.7

  .mb-dungeon-popup-inner2
    position: absolute
    top: 0
    display: flex
    flex-direction: column
    justify-content: center
    height: calc(100vh - 40px)
    // background-color: white
    // max-height: 700px
    // width: 100%
    // height: 100%
    // max-width: 50vw

  .video
    position: relative

  video
    border-radius: 18px
    max-width: 95vw
    max-height: calc(80vh - 120px)

  button
    font-family: Montserrat,sans-serif
    font-size: 14px
    font-weight: 700
    border: none
    outline: none !important
    user-select: none
    text-decoration: none !important
    transition: all .3s ease
    cursor: pointer
    align-items: center
    display: block
    padding: 12px 20px
    color: #fff
    background: linear-gradient(100.13deg,#ff007a 1.78%,#ffc700 139.38%)
    box-shadow: 4px 2px 8px rgb(255 199 0 / 25%), 2px 4px 8px rgb(255 0 122 / 25%)
    border-radius: 20px
    margin: 0 auto
    z-index: 1

  button:hover
    box-shadow: 4px 2px 8px rgb(255 199 0 / 60%), 2px 4px 8px rgb(255 0 122 / 60%)

  .button-popup
    position: absolute
    width: 100%
    left: 0
    bottom: calc(3% + 10px)

</style>
