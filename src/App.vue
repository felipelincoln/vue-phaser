<template lang='pug'>
  #beasties_app

    NavBar
    router-view(id="beasties_router")
    Footer

</template>

<script>


import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import 'animate.css'
import WOW from 'wow.js/dist/wow'

import $ from 'jquery'

import {mapActions} from 'vuex';

export default {
  name: 'App',

  components: {
    Footer,
    NavBar
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


</style>
