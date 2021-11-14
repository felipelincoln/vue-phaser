import Phaser from 'phaser'
import MapScene from "@/phaser/scene";

function launch(containerId) {

    return new Phaser.Game({
        type: Phaser.AUTO,
        scale: {
          parent: containerId,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: 2840,
          height: 1080
        },
        scene: MapScene

    })

}

export default launch
export { launch }
