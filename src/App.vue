<template lang='pug'>
  #beasties_app(style="height:100vh;width:100vw;overflow:hidden")

    NavBar
    // router-view(id="beasties_router")
    // Footer
    Map

</template>

<script>


import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Map from "@/components/pve/Map";

import 'animate.css'
import WOW from 'wow.js/dist/wow'

// import $ from 'jquery'

import {mapActions} from 'vuex';

export default {
  name: 'App',

  components: {
    Footer,
    NavBar,
    Map
  },

  methods: {

    ...mapActions([
        'action_detects'
    ]),



    init_wow() {
      let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      })
      wow.init();
    }

  },

  created() {
    this.init_wow();
    this.action_detects();
  },

  mounted() {

  }

}
</script>

<style lang="sass">
  *
    margin: 0

</style>
