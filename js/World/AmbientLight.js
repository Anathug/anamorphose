import { Object3D, AmbientLight } from 'three'

export default class AmbientLightSource {
    constructor() {
        this.container = new Object3D()
        this.params = { color: 0x404040 }
        this.createAmbientLight()
    }
    createAmbientLight() {
        this.light = new AmbientLight(this.params.color)
        this.container.add(this.light)
    }
}
