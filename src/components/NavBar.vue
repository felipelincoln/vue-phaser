<template lang="pug">
  #int_navbar_wrapper
    p Navbar. Player: {{ get_player }}
      span(@click="player_add_level") (+1)


</template>

<script>

import {mapGetters, mapMutations} from 'vuex';

export default {
name: "NavBar",

  props: {
  },

  data() {
    return {

    }
  },

  computed: {
    ...mapGetters(['get_player'])
  },

  methods: {

  ...mapMutations(['player_add_level'])


  },

  mounted() {


  },

  watch: {

  }

}
</script>

<style lang="sass">
  #int_navbar_wrapper
    line-height: 40px
    padding-left: 25px

</style>
