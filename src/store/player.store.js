import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {

    web3: null,

    player: {
        'level': 1 
    },

    current_dungeon: null,
    preview_dungeon_popup: false,
    show_dungeon_popup: false,

}

const getters = {
    get_player: state => state.player,
    get_current_dungeon: state => state.current_dungeon,
    get_show_dungeon_popup: state => state.show_dungeon_popup,
    get_preview_dungeon_popup: state => state.preview_dungeon_popup,


}


const mutations = {
    player_add_level(state){
        state.player.level += 1;
    },

    pve_set_current_dungeon(state, value){
        state.current_dungeon = value
    },

    pve_show_dungeon_popup(state){
//        state.preview_dungeon_popup = false;
        state.show_dungeon_popup = true;
    },

    pve_preview_dungeon_popup(state){
        state.preview_dungeon_popup = true;
    },

    pve_hide_dungeon_popup(state){
        state.preview_dungeon_popup = false;
        state.show_dungeon_popup = false;
    },

}

const actions = {




}

export default {
    state,
    actions,
    mutations,
    getters
};
