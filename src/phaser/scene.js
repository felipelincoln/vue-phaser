import Phaser from 'phaser'


import {Scene} from 'phaser'



const host = process.env.VUE_APP_ASSETS_PATH


export default class MapScene extends Scene {

    constructor() {
        super({key: 'MapScene'})
    }

    preload() {
        this.load.image('map', host + 'map/map.png')
        this.load.image('adventure_1', host + 'map/adventure_1.png')
    }

    create() {

        this.beasties_map = this.add.image(0, 0, "map").setInteractive();
       

    }

    update() {





    }



}

