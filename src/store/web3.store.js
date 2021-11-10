import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios";

Vue.use(Vuex)

import Web3 from 'web3'




const state = {

    web3: null,
    account: "0x0000",
   
}

const getters = {
    get_account: state => state.account,
 

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


