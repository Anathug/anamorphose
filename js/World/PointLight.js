import { Object3D, SpotLight, Color } from 'three'

export default class PointLightSource {
    constructor(options) {
        this.debug = options.debug
        this.container = new Object3D()
        this.params = {
            color: 0x0,
            positionX: -30,
            positionY: 20,
            positionZ: 200,
        }
        if (this.debug) {
            this.setDebug()
        }
        this.createPointLight()
    }
    createPointLight() {
        this.light = new SpotLight(this.params.color)
        this.light.castShadow = true
        this.light.position.set(
            this.params.positionX,
            this.params.positionY,
            this.params.positionZ
        )
        this.container.add(this.light)
    }
    setDebug() {
        this.debugFolder = this.debug.addFolder('Point Light')
        this.debugFolder.open()
        this.debugFolder
            .addColor(this.params, 'color')
            .name('Color')
            .onChange(() => {
                this.light.color = new Color(this.params.color)
                console.log(this.light.color)
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