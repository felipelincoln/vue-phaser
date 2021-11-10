<template lang="pug">
  #beasties_map_wrapper

    transition(name='fade')
      DungeonPopup(v-if="get_show_dungeon_popup")

    .mb-map-inner
      .mb-map(:id="container_id", v-if="downloaded")

</template>

<script>
import DungeonPopup from "@/components/pve/DungeonPopup";
import {mapGetters} from 'vuex';

export default {
  name: "Map",

  components: {
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
    ...mapGetters(['get_show_dungeon_popup'])
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


</style>