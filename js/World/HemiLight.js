import { Object3D, HemisphereLight, Color } from 'three'


export default class HemisphereLightSource {
    constructor(options) {
        // this.debug = options.debug

        this.container = new Object3D()
        this.params = {
            firstColor: 0xffffff,
            secondColor: 0xffffff,
            intensity: 0.6,
            positionX: 0,
            positionY: 50,
            positionZ: 0
        }

        if (this.debug) {
            this.setDebug()
        }
        this.createHemisphereLight()
    }
    createHemisphereLight() {
        this.light = new HemisphereLight(this.params.firstColor, this.params.secondColor, this.params.intensity)
        this.light.groundColor.setHSL(0.095, 1, 0.75);
        this.light.position.set(this.params.positionX, this.params.positionY, this.params.positionZ);
        this.container.add(this.light)
    }
    setDebug() {
        this.debugFolder = this.debug.addFolder('Hemi Light')
        this.debugFolder.open()
        this.debugFolder
            .addColor(this.params, 'firstColor')
            .name('Color')
            .onChange(() => {
                this.light.color = new Color(this.params.firstColor)
            })
        this.debugFolder
            .add(this.params, 'positionX', 0, 100, 0.01)
            .onChange(() => {
                this.light.position.x = this.params.positionX
            })
        this.debugFolder
            .add(this.params, 'positionY', 0, 100, 0.01)
            .onChange(() => {
                this.light.position.y = this.params.positionY
            })
        this.debugFolder
            .add(this.params, 'positionZ', 0, 100, 0.01)
            .onChange(() => {
                this.light.position.z = this.params.positionZ
            })
        this.debugFolder.open()

    }
}
