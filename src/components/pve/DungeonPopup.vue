<template lang="pug">
  .mb-dungeon-popup
    .mb-dungeon-popup-background(@click="close")

    .mb-dungeon-popup-inner
      span Popup fro dungeon {{ get_current_dungeon }}
      span(@click="close") (close)
</template>

<script>

import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "DungeonPopup",

  computed: {
    ...mapGetters(['get_current_dungeon'])
  },

  methods: {
    ...mapMutations(['pve_hide_dungeon_popup']),
    close() {
      this.pve_hide_dungeon_popup()
    },

  }
}
</script>

<style lang="sass">
.mb-dungeon-popup
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center
  overflow: hidden
  position: fixed
  z-index: 30

  width: 100%
  height: 100%

  .mb-dungeon-popup-background
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    background-color: black
    opacity: 0.1

  .mb-dungeon-popup-inner
    position: absolute
    display: flex
    flex-direction: column
    max-height: calc(100vh - 40px)
    width: 100%
    max-width: 400px
    overflow: hidden
    border-radius: 18px
    background-color: white
    padding: 20px
    margin: auto

</style>