// import Phaser from 'phaser'


import {Scene} from 'phaser'

import store from "@/store/index.js"

const host = process.env.VUE_APP_ASSETS_PATH

const adventures = require('@/phaser/adventures.json')
const dungeons = require('@/phaser/dungeons.json')

const dragBorders = {
  xMin: 0,
  yMin: 260,
  xMax: 2840 - 2*800,
  yMax: 1080 / 2
}

function intervalX(x){ return checkInterval(x, dragBorders.xMin, dragBorders.xMax) }
function intervalY(y){ return checkInterval(y, dragBorders.yMin, dragBorders.yMax) }

function checkInterval(val, min, max){
  if(val >= min){
    if(val <= max){
      return val
    }else {
      return max
    }
  }else {
    return min
  }
}

export default class MapScene extends Scene {

    constructor() {
        super({key: 'MapScene'})
    }

    preload() {
        this.load.image('map', host + 'map/map.png')

        console.log(this)

        for (let i = 0; i < adventures.length; i++){
            this.load.image(adventures[i]['key'], `${host}/pins/${adventures[i]['image']}`)
            this.load.video(adventures[i]['key'], `${host}/locations/${adventures[i]['video']}`)
        }

        for (let i = 0; i < dungeons.length; i++){
            this.load.image(dungeons[i]['key'], `${host}/pins/${dungeons[i]['image']}`)
            this.load.video(dungeons[i]['key'], `${host}/locations/${dungeons[i]['video']}`)
        }
    }

    create() {
        this.adventures = adventures;
        this.dungeons = dungeons;

        this.beasties_map = this.add.image(0, 0, "map").setInteractive();

        for (let i in this.adventures) {
            this.adventures[i]['object'] = this.add.image(adventures[i]['position']['x'], adventures[i]['position']['y'], adventures[i]['key']).setInteractive()
            this.adventures[i]['object'].data = adventures[i]
        }

        for (let i in this.dungeons) {
            this.dungeons[i]['object'] = this.add.image(dungeons[i]['position']['x'], dungeons[i]['position']['y'], dungeons[i]['key']).setInteractive()
            this.dungeons[i]['object'].data = dungeons[i]
        }

        this.input.setTopOnly(true)
        this.input.setDraggable(this.beasties_map)
        this.input.dragDistanceThreshold = 16

        this.beasties_map.isBeingDragged = false
        this.beasties_map.movingSpeed = 0

        this.input.on('dragstart', (pointer, gameObject) => {
          this.beasties_map.isBeingDragged = true
        })

        this.input.on('dragend', (pointer, gameObject) => {
          this.beasties_map.isBeingDragged = false
        })

        this.input.on('gameobjectover', (pointer, gameObject) => {
          if(gameObject != this.beasties_map){
            if(gameObject.data.level > store.getters.get_player.level){
              gameObject.setTint(0xaaaaaa)
            } else {
              gameObject.setTint(0x00ff00)
            }
          }
        })

        this.input.on('pointerdown', (pointer, gameObject) => {
          if(store.getters.get_player.level >= gameObject[0].data.level){
            store.commit('pve_set_current_dungeon', gameObject[0].data.key)
            store.commit('pve_preview_dungeon_popup')
          }
        })

        this.input.on('gameobjectout', (pointer, gameObject) => {
          gameObject.clearTint()
        })

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
          let effectiveDragX = intervalX(dragX)
          let effectiveDragY = intervalY(dragY)

          console.log(dragY)

          gameObject.x = effectiveDragX
          gameObject.y = effectiveDragY
          this.beasties_map.movingSpeed = 0

          for (let i in this.adventures) {
              this.adventures[i]['object'].x = effectiveDragX + adventures[i]['position']['x']
              this.adventures[i]['object'].y = effectiveDragY + adventures[i]['position']['y']
          }
          for (let i in this.dungeons) {
              this.dungeons[i]['object'].x = effectiveDragX + dungeons[i]['position']['x']
              this.dungeons[i]['object'].y = effectiveDragY + dungeons[i]['position']['y']
          }
        })
    }

    update() {
        let player_level = store.getters.get_player['level']
        // Grayscale adventures with level < player level

    }


}

