import Phaser from 'phaser'
import MapScene from "@/phaser/scene";

function launch(containerId) {

    return new Phaser.Game({
        type: Phaser.AUTO,
        width: 2840,
        height: 1080,
        parent: containerId,
        scene: MapScene

    })

}

export default launch
export { launch }
