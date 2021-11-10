import Phaser from 'phaser'
import MapScene from "@/phaser/scene";

function launch(containerId) {

    return new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 800,
        parent: containerId,
        scene: MapScene

    })

}

export default launch
export { launch }
