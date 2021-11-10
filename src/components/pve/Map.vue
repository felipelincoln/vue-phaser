<template lang="pug">
  #beasties_map_wrapper

    .mb-map-inner

      .mb-map(:id="container_id", v-if="downloaded")

</template>

<script>
export default {
  name: "Map",

  data() {
    return {
      downloaded: false,
      game_instance: null,
      container_id: 'game-container'
    }
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

</style>