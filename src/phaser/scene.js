// import Phaser from 'phaser'


import {Scene} from 'phaser'

import store from "@/store/index.js"

const host = process.env.VUE_APP_ASSETS_PATH

console.log(host)

const adventures = require('@/phaser/adventures.json')
const dungeons = require('@/phaser/dungeons.json')

export default class MapScene extends Scene {

    constructor() {
        super({key: 'MapScene'})
    }

    preload() {
        this.load.image('map', host + 'map/map.png')

        for (let i = 0; i < adventures.length; i++){
            this.load.image(adventures[i]['key'], `${host}/pins/${adventures[i]['image']}`)
        }

        for (let i = 0; i < dungeons.length; i++){
            this.load.image(dungeons[i]['key'], `${host}/pins/${dungeons[i]['image']}`)
        }
    }

    create() {

        this.beasties_map = this.add.image(0, 0, "map").setInteractive();

        this.adventures = adventures;
        for (let i in this.adventures) {
            this.adventures[i]['object'] = this.add.image(adventures[i]['position']['x'], adventures[i]['position']['y'], adventures[i]['key'])
        }

        this.dungeons = dungeons;
        for (let i in this.dungeons) {
            this.dungeons[i]['object'] = this.add.image(dungeons[i]['position']['x'], dungeons[i]['position']['y'], dungeons[i]['key'])
        }

        const test_button = this.add.text(300, 300, 'Open Dungeon', { fill: '#0f0' });
        test_button.setInteractive();
        test_button.on('pointerdown', function (){
            store.commit('pve_set_current_dungeon', 1)
            store.commit('pve_show_dungeon_popup')
        })

        console.log(this.adventures)
    }

    update() {

        let player_level = store.getters.get_player['level']
        // Grayscale adventures with level < player level

    }


}

