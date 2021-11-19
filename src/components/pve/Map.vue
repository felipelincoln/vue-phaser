<template lang="pug">
  #beasties_map_wrapper

    transition(name='fade')
      PreviewPopup(v-if="get_preview_dungeon_popup")
    transition(name='fade')
      DungeonPopup(v-if="get_show_dungeon_popup")

    .mb-map-inner
      .mb-map(:id="container_id", v-if="downloaded")

</template>

<script>
import PreviewPopup from "@/components/pve/PreviewPopup";
import DungeonPopup from "@/components/pve/DungeonPopup";
import {mapGetters} from 'vuex';

export default {
  name: "Map",

  components: {
    PreviewPopup,
    DungeonPopup
  },

  data() {
    return {
      downloaded: false,
      game_instance: null,
      container_id: 'game-container'
    }
  },

  computed: {
    ...mapGetters(['get_preview_dungeon_popup', 'get_show_dungeon_popup'])
  },

  async mounted() {
    const game = await import(/* webpackChunkName: "game" */ '@/phaser/pve')
    this.downloaded = true
    this.$nextTick(() => {
      this.game_instance = game.launch(this.container_id)
    })
  },

  destroyed() {
    this.game_instance.destroy(false)
  }


}
</script>

<style lang="sass">
.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0

.mb-map-inner
  display: flex
  flex-direction: row
  justify-content: center


#game-container 
  background-image: url(../../../public/public_assets/blurred_bg.jpg)
  width: 100%
  max-width: 2840px

</style>
