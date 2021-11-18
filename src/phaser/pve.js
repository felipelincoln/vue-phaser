import Phaser from 'phaser'
import MapScene from "@/phaser/scene";

function launch(containerId) {

    return new Phaser.Game({
        type: Phaser.AUTO,
        transparent: true,
        scale: {
          parent: containerId,
          autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
          width: 2840,
          height: 1080
        },
        scene: MapScene

    })

}

export default launch
export { launch }
