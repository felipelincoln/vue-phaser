import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios";

Vue.use(Vuex)

import Web3 from 'web3'




const state = {

    web3: null,
    player: {
        'level': 1 
    },
   
}

const getters = {
    get_player: state => state.player,
 

}


const mutations = {


}

const actions = {


}

export default {
    state,
    actions,
    mutations,
    getters
};


